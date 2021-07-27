import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import  { useStyles }   from '../../styles'

export default function AuthScreen ():JSX.Element  {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} className={classes.root}>
        <div className={classes.splitScreen}>
          <div className={classes.topPane}>
              Rank Your Playlist
          </div>
          <div className={classes.bottomPane}>  
              <div>
                <div>Scorify</div>
                  <Button variant="contained" color="primary">
                    Sign in with Spotify
                  </Button>
              </div>
          </div>
        </div>
      </Container>
    </>
  );
}
