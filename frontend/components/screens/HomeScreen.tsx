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
  playlistId: string;
  photo: string;
}

export default function AuthScreen(): JSX.Element {
  const classes = useStyles();
  //declare playlists array
  const playlists: Array<any> = [];
  //fetch req to endpoint
  fetch('/playlist')
    //iterate through res
    .then((res) => res.json())
    .then((data) =>
      data.map((ele: any): object => {
        const playlistObj: Playlist = {
          name: ele.items.name,
          playlistId: ele.items.playlistId,
          photo: ele.items.photo,
        };
        return playlistObj;
      })
    )
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
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth={false} className={classes.root}>
        <div className={classes.splitScreen}>
          <div className={classes.topPane}></div>
          <div className={classes.bottomPane}>{playlists}</div>
        </div>
      </Container>
    </>
  );
}

const PlaylistContainer = styled.div`
  display: flex;
`;
