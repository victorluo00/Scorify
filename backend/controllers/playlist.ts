import { Request, Response, NextFunction } from 'express';

const fetch = require('node-fetch');
const { SPOTIFY_TOKEN } = require('../env.ts');
class PlaylistController {
  // Single playlist call
  async getPlaylist(req: Request, res: Response, next: NextFunction) {
    const rawData = await fetch(
      `https://api.spotify.com/v1/playlists/${req.params.id}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + SPOTIFY_TOKEN,
        },
      }
    );

    res.locals.playlist = await rawData.json();

    next();
  }

  // Called as soon as user logs in, loads all playlists with their data
  async loadDataMiddleware(req: Request, res: Response, next: NextFunction) {
    const access_token = req.cookies.access_token; //reads access token from cookies
    console.log(
      '🚀 | file: server.ts | line 112 | loadDataMiddleware | access_token',
      access_token
    );
    console.log(req.cookies);

    // const rawUser = await fetch(`https://api.spotify.com/v1/me`, {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     Authorization: 'Bearer ' + access_token,
    //   },
    // });

    // res.locals.user = await rawUser.json();

    // fetches for basic data on users playlists
    const rawPlaylist = await fetch(`https://api.spotify.com/v1/me/playlists`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + access_token,
      },
    });

    // parses rawplaylist data
    res.locals.playlists = await rawPlaylist.json();

    if (res.locals.playlists.error) {
      console.log('Caught expired token');
      if (res.locals.playlists.error.message === 'The access token expired')
        res.redirect('/login');
    }

    console.log(
      '🚀 | file: playlist.ts | line 68 | PlaylistController | loadDataMiddleware | res.locals.playlists',
      res.locals.playlists
    );
    next();
  }

  async getPlaylistData(req: Request, res: Response, next: NextFunction) {
    const access_token = req.cookies.access_token; //reads access token from cookies

    const playlistObj: any = {}; //Create obj, will be stored in res.locals.playlistsObj

    const { items } = res.locals.playlists; //read basic data from res.locals.playlist

    const playlistStorage = items.map((el: any) => {
      //F ilter out only the id, name, url, track api link, and total number of tracks, start playlistRating at 0
      const tempPlaylist = {
        id: el.id,
        name: el.name,
        url: el['external_urls'].spotify,
        tracks: el.tracks.href,
        photo: el.images[0],
        totalTracks: el.tracks.total,
        playlistRating: 0,
      };
      return tempPlaylist;
    });

    for (let i = 0; i < playlistStorage.length; i++) {
      // iterate through basic playlist data,
      //for each playlist in account, fetch for detail on playlist

      const rawPlaylistData = await fetch(`${playlistStorage[i].tracks}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + access_token,
        },
      });

      const parsedPlaylistData = await rawPlaylistData.json();

      //after getting details for each playlist, filter out important data
      // console.log(
      //   '🚀 | file: playlist.ts | line 113 | PlaylistController | parsedPlaylistData.items?.map | parsedPlaylistData.items',
      //   parsedPlaylistData.items
      // );

      // const filteredTrackData = await Promise?.all(
      //Promise.all waits for all promise to fulfill

      const filteredTrackData: any = [];

      for (const item of parsedPlaylistData.items) {
        const trackObj = {
          trackId: item.track.id,
          artistName: item.track.artists?.map((item: any) => {
            return item.name;
          }),
          trackName: item.track.name,
          popularity: item.track.popularity,
          songData: {
            valence: 0,
            energy: 0,
            danceability: 0,
            speechiness: 0,
            mode: 0,
            loudness: 0,
          },
          rating: 0,
        };

        // for each song, fetch for more technical details
        const rawSongData = await fetch(
          `https://api.spotify.com/v1/audio-features/${trackObj.trackId}`,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + access_token,
            },
          }
        );

        trackObj.songData = await rawSongData.json();

        // calculate rating for each song
        trackObj.rating = Math.round(
          trackObj.popularity * 0.4 +
            trackObj.songData.valence * 10 +
            trackObj.songData.energy * 10 +
            trackObj.songData.danceability * 10 +
            (1 - trackObj.songData.speechiness) * 10 +
            trackObj.songData.mode * 10 +
            ((60 + trackObj.songData.loudness) / 60) * 10
        );

        playlistStorage[i].playlistRating += trackObj.rating;

        filteredTrackData.push(trackObj);
      }

      playlistObj[`playlist${i + 1}`] = {
        songs: filteredTrackData,
        photo: playlistStorage[i].photo,
      };

      // compute average rating for each playlist
      playlistObj[`playlist${i + 1}`].rating = Math.round(
        playlistStorage[i].playlistRating / playlistStorage[i].totalTracks
      );
    }

    res.locals.playlistObj = playlistObj;
    next();
  }
}

const playlistController = new PlaylistController();

export default playlistController;
