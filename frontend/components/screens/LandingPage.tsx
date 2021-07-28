import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  leftSide: {
    // margin: theme.spacing(10, 0),
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    // backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#191414',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    justifyContent: 'center'
  },
  rightSide: {
    // margin: theme.spacing(-30, 4),
    height: '100%',
    paddingLeft: '20px',
    paddingRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#1DB954"
    // backgroundColor: "white",
    // color: 'black'

  },
  companyName: {
    // marginTop: theme.spacing(10),
    color: 'white',
    fontSize: '150px',
    fontStyle: 'bold',
  },
  descriptionText: {
    color: 'white',
    fontSize: '40px',
    fontStyle: 'italic',
  }

}));

export default function LandingPage(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={7}className={classes.leftSide} >
        <Typography component='div' className={classes.companyName}>Scorify</Typography>
        <div className={classes.descriptionText}>Rank your playlist</div>
        <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Log In With Spotify
            </Button>
        </Grid>
      <Grid item xs={false} sm={4} md={5} component={Paper} elevation={9} square>
        <div className={classes.rightSide}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <form className={classes.form} noValidate>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Log In With Spotify
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
            <Box mt={5}>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}