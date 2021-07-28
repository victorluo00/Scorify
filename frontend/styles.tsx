import { makeStyles } from '@material-ui/core/styles';

export const spotifyGreen = '#1DB954';
export const spotifyBlack = '#191414';

export const useStyles = makeStyles({
  root: {
    height: '100vh',
    paddingLeft: 0,
    paddingRight: 0,
  },
  container: {
    backgroundColor: '#cfe8fc',
    fontFamily: 'Gotham',
    width: '100%',
  },
  splitScreen: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  topPane: {
    width: '100%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // MozColumnWidth: '50%',
    backgroundColor: '#191414',
  },
  bottomPane: {
    width: '100%',
    height: '50%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  mainPane: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'flex-start',
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
});
