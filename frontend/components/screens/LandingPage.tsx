import React, {useCallback} from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  screen: {
    // margin: theme.spacing(10, 0),
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    // backgroundRepeat: 'no-repeat',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#191414',
    justifyContent: 'center'
  },
  button: {
    // margin: theme.spacing(3, 0, 2),
    backgroundColor: "#1DB954",
    marginTop: '80px',
    paddingLeft: '10px',
    paddingRight: '10px',
    // fontWeight: 'bold'
  },
  projectName: {
    color: 'white',
    fontSize: '180px',
    position: 'relative'
  },
  descriptionText: {
    color: 'white',
    fontSize: '40px',
    fontFamily: 'Trebuchet MS, Arial, Helvetica, sans-serif',
    fontStyle: 'italic',
    position: 'absolute',
    marginLeft: '449px',
    marginTop: '155px',
  },
  spotifyLogo: {
    // width: '35px',
    // height: '40px'
  }

}));

export default function LandingPage(): JSX.Element {
  const classes = useStyles();
  
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12}className={classes.screen} >
        <Typography component='div' className={classes.projectName}>Scorify</Typography>
        <div className={classes.descriptionText}>Score your playlists</div>
        <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<Avatar className={classes.spotifyLogo} src={'https://w7.pngwing.com/pngs/879/271/png-transparent-spotify-computer-icons-streaming-media-music-home-icons-hand-logo-music-download.png'} />}
            >
              Log In With Spotify
            </Button>
        </Grid>

    </Grid>
  );
}