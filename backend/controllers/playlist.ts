import { Request, Response, NextFunction } from 'express';

const fetch = require('node-fetch');
const { SPOTIFY_TOKEN } = require('../env.ts');
class PlaylistController {
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

  async loadDataMiddleware(req: Request, res: Response, next: NextFunction) {
    const access_token = req.cookies.access_token;
    console.log(
      '🚀 | file: server.ts | line 112 | loadDataMiddleware | access_token',
      access_token
    );

    // const rawUser = await fetch(`https://api.spotify.com/v1/me`, {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     Authorization: 'Bearer ' + access_token,
    //   },
    // });

    // res.locals.user = await rawUser.json();

    const rawPlaylist = await fetch(`https://api.spotify.com/v1/me/playlists`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + access_token,
      },
    });

    res.locals.playlists = await rawPlaylist.json();

    if (res.locals.playlists.error) {
      console.log('Caught expired token');
      if (res.locals.playlists.error.message === 'The access token expired')
        res.redirect('/login');
    }

    next();
  }

  async getPlaylistData(req: Request, res: Response, next: NextFunction) {
    const access_token = req.cookies.access_token;
    console.log(
      '🚀 | file: playlist.ts | line 55 | PlaylistController | loadDataMiddleware | res.locals.playlistIDs',
      res.locals.playlistIDs
    );

    const playlistObj: any = {};

    const { items } = res.locals.playlists;

    const playlistStorage = items.map((el: any) => {
      let playlistObj = {
        id: el.id,
        name: el.name,
        url: el['external_urls'].spotify,
        tracks: el.tracks.href,
      };
      return playlistObj;
    });

    for (let i = 0; i < playlistStorage.length; i++) {
      //running through playlist
      const rawPlaylistData = await fetch(`${playlistStorage[i].tracks}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + access_token,
        },
      });

      const parsedPlaylistData = await rawPlaylistData.json();

      const filteredPlaylistData = await Promise.all(
        parsedPlaylistData.items?.map(async (el: any) => {
          //running through each song in playlist
          const trackObj = {
            trackId: el.track.id,
            artistName: el.track.artists?.map((el: any) => {
              return el.name;
            }),
            trackName: el.track.name,
            popularity: el.track.popularity,
            songData: [],
          };

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
          return trackObj;
        })
      );

      playlistObj[`playlist${i + 1}`] = filteredPlaylistData;
    }

    // console.log(
    //   '🚀 | file: playlist.ts | line 70 | PlaylistController | getPlaylistData | playlistObj',
    //   playlistObj
    // );

    res.locals.playlistObj = playlistObj;
    next();
  }
}

const playlistController = new PlaylistController();

export default playlistController;
