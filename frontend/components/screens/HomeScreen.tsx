import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from '../../styles';
import styled from 'styled-components';
import PlaylistBox from '../PlaylistBox';

interface Playlist {
  name: string;
  playlistId: number;
  photo: string;
}

export default function AuthScreen(): JSX.Element {
  const classes = useStyles();
  //declare playlists array
  const playlists: Array<any> = [];
  //fetch req to endpoint
  for (let i = 0; i < 10; i++) {
    playlists.push(
      <PlaylistBox
        name='Bangers Only'
        playlistId={69 + i}
        photo='/../../assets/PlaylistCover.png'
      />
    );
  }

  function getPlaylist() {
    console.log('getPlaylist');
    fetch('http://localhost:3000/playlist', {
      method: 'GET',
      credentials: 'include',
    })
      .then((data) => data.json())
      .then((data) => console.log(data));
  }

  fetch('/api/playlist')
    //iterate through res
    .then((res) => res.json())
    .then((data) => {
      console.log('data', data);
      if (data) {
        return data.map((ele: any): object => {
          const playlistObj: Playlist = {
            name: ele.items.name,
            playlistId: ele.items.playlistId,
            photo: ele.items.photo,
          };
          return playlistObj;
        });
      }
    })
    //grab name, playlist id, cover photo
    .then((playlistList) =>
      playlistList.map((ele: Playlist) => (
        <PlaylistBox
          name={ele.name}
          playlistId={ele.playlistId}
          photo={ele.photo}
        />
      ))
    );
  //push new playlist component to playlists array passing in name, playlist id, and cover photo

  return (
    <>
      <CssBaseline />
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Scorify
          </Typography>
          <Button onClick={getPlaylist} color='inherit'>
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
      <HomePage>
        <div className={classes.mainPane}>{playlists}</div>
      </HomePage>
    </>
  );
}
const HomePage = styled.div`
  width: 100%;
  height: 100%;
`;
