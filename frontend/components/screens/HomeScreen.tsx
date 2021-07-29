import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
<<<<<<< HEAD
  useHistory,
=======
>>>>>>> f639ac4c199d9b7a8d3e6448a5603f98944b17f0
} from 'react-router-dom';
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
import PlaylistDetailScreen from './PlaylistDetailScreen';

interface Playlist {
  playlistName: string;
  playlistId: number;
  photo: string;
  rating: object;
  songs: Array<any>;
}

export default function AuthScreen(): JSX.Element {
  const playlistList: object[] = [];
  let redirectProps: object[];
  // const [playlistData, setPlaylistData] = useState(Array<any>());
  const [playlistBoxList, setPlaylistBoxList] = useState(Array<any>());
  const history = useHistory();
  // const [goToPlaylist, setGoToPlaylist] = useState(null);

  const classes = useStyles();
  //declare playlists array
  const routes: Array<any> = [];
  //fetch req to endpoint

<<<<<<< HEAD
  function renderPlaylistDetailScreen(id: number) {
    console.log('id', id);
    console.log('playlistList', playlistList);
    redirectProps = playlistList.filter((ele: any) => {
      console.log('ele.playlistId', ele.playlistId, 'id', id);
      console.log(
        'typeof ele.playlistId',
        typeof ele.playlistId,
        'typeof id',
        typeof id
      );
      return ele.playlistId === id;
    });
    console.log('redirectProps', redirectProps);
    // setGoToPlaylist(redirectProps);
    // let history = useHistory();
    history.push('/playlistdetails', {
      playlistName: redirectProps.playlistName,
      playlistId: redirectProps.playlistId,
      photo: redirectProps.photo,
      rating: redirectProps.rating,
      songs: redirectProps.songs,
    });
    // return (
    //   <Redirect
    //     to={{
    //       pathname: `/playlistdetails`,
    //       state: {
    //         playlistName: redirectProps.playlistName,
    //         playlistId: redirectProps.playlistId,
    //         photo: redirectProps.photo,
    //         rating: redirectProps.rating,
    //         songs: redirectProps.songs,
    //       },
    //     }}
    //   ></Redirect>
    // );
  }
=======
  // function renderPlaylistDetailScreen (id) {

  // }
>>>>>>> f639ac4c199d9b7a8d3e6448a5603f98944b17f0

  function getPlaylist() {
    console.log('getPlaylist', Date.now());
    fetch('http://localhost:3000/playlist', {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .then((data) => {
<<<<<<< HEAD
        let counter = 0;
=======
        const playlistList: object[] = [];
>>>>>>> f639ac4c199d9b7a8d3e6448a5603f98944b17f0
        const playlistBoxList: Array<any> = [];
        console.log(
          '🚀 | file: HomeScreen.tsx | line 56 | getPlaylist | data.playlist',
          data.playlist
        );
        for (let curPlaylist in data.playlist) {
          console.log('loop iteration');
<<<<<<< HEAD
=======

>>>>>>> f639ac4c199d9b7a8d3e6448a5603f98944b17f0
          let ele = data.playlist[curPlaylist];
          const playlistObj: Playlist = {
            playlistName: ele.name,
            playlistId: counter,
            photo: ele.photo
              ? ele.photo.url
              : 'https://www.sleek-mag.com/wp-content/uploads/2016/08/AlbumCovers_Blonde.jpg',
            rating: ele.rating,
            songs: ele.songs,
          };
          playlistList.push(playlistObj);
          console.log(
            '🚀 | file: HomeScreen.tsx | line 67 | getPlaylist | playlistList',
            playlistList
          );
          playlistBoxList.push(
            <PlaylistBox
<<<<<<< HEAD
              // /*onClick={(e:any)=> <Redirect to = {{pathname: `/${e.target.id}`}}/> }*/
              id={counter++}
              redirect={renderPlaylistDetailScreen}
              playlistName={playlistObj.playlistName}
=======
              /*onClick={(e:any)=> <Redirect to = {{pathname: `/${e.target.id}`}}/> }*/ playlistName={
                playlistObj.playlistName
              }
>>>>>>> f639ac4c199d9b7a8d3e6448a5603f98944b17f0
              playlistId={playlistObj.playlistId}
              photo={playlistObj.photo}
            />
          );
          console.log(
            '🚀 | file: HomeScreen.tsx | line 68 | getPlaylist | playlistBoxList',
            playlistBoxList
          );
        }
        setPlaylistBoxList(playlistBoxList);
<<<<<<< HEAD
        // playlistList.forEach((ele: any) => {
        //   routes.push(
        //     <Route path={`/${ele.playlistId}`}>
        //       <PlaylistDetailScreen
        //         playlistName={ele.playlistName}
        //         playlistId={ele.id}
        //         photo={ele.photo}
        //         rating={ele.rating}
        //         songs={ele.songs}
        //       />
        //     </Route>
        //   );
        // });
=======
        playlistList.forEach((ele: any) => {
          routes.push(
            <Route path={`/${ele.playlistId}`}>
              <PlaylistDetailScreen
                playlistName={ele.playlistName}
                playlistId={ele.id}
                photo={ele.photo.url}
                rating={ele.rating}
                songs={ele.songs}
              />
            </Route>
          );
        });
>>>>>>> f639ac4c199d9b7a8d3e6448a5603f98944b17f0
      });
  }

  //push new playlist component to playlists array passing in name, playlist id, and cover photo
  useEffect(() => {
    getPlaylist();
  }, []);

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
            Scorify
          </Typography>
          <Button onClick={getPlaylist} color="inherit">
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
      <HomePage>
        <div
          style={{ justifyContent: 'space-evenly' }}
          className={classes.mainPane}
        >
          {playlistBoxList}
        </div>
      </HomePage>
<<<<<<< HEAD
      {/* <div>
        <Router>
          <Switch>
            <Route
              path="/playlistdetails"
              render={(props) => <PlaylistDetailScreen {...props} />}
            ></Route>
          </Switch>
        </Router>
      </div> */}
=======
      <div>
        <Router>
          <Switch>{routes}</Switch>
        </Router>
      </div>
>>>>>>> f639ac4c199d9b7a8d3e6448a5603f98944b17f0
    </>
  );
}
const HomePage = styled.div`
  width: 100%;
  height: 100%;
`;
