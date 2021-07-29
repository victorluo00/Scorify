import React, { FC, useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { LinearProgress, CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import {
//   Chart,
//   PieSeries,
//   Title,
// } from '@devexpress/dx-react-chart-material-ui';

const ScoreBreakdown: FC = () => {
  const classes = useStyles();
  const [percent, setPercent] = useState(20);

  // const [progress, setProgress] = React.useState(0);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress(oldProgress => {
  //       if (oldProgress === 100) {
  //         return 0;
  //       }
  //       return Math.min(oldProgress + 15, 100);
  //     });
  //   }, 1000);

  // return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  interface PlaylistRating {
    energy: number;
    danceability: number;
    speechiness: number;
    mode: number;
    valence: number;
    loudness: number;
    [key: string]: number;
  }

  const mockData: PlaylistRating = {
    valence: 0.4,
    energy: 0.2,
    danceability: 0.9,
    speechiness: 0.1,
    mode: 0.2,
    loudness: 0.6,
  };

  return (
    <Grid container component='main' className={classes.root}>
      <Typography className={classes.text}>Score Breakdown</Typography>

      <Grid spacing={2} container direction='column'>
        {Object.keys(mockData).map((key: keyof PlaylistRating) => {
          return (
            <div>
              <Grid xs spacing={2}>
                <div
                  style={{
                    color: 'white',
                    position: 'relative',
                    margin: '0',
                    bottom: '50%',
                    // -ms-transform: 'translateY(-50%)',
                    transform: 'translateY(50%)',
                  }}
                >
                  {key}
                </div>
                <BorderLinearProgress
                  value={mockData[key] * 100}
                  variant='determinate'
                  title='test'
                />
              </Grid>
            </div>
          );
        })}
      </Grid>

      {/* <Grid spacing={2} container>
				<Grid xs item>
						<BorderLinearProgress value={80} variant="determinate" title="test" />
				</Grid>
				</Grid>   */}
    </Grid>
  );
};

export default ScoreBreakdown;

const useStyles = makeStyles({
  root: {
    height: '60vh',
    backgroundColor: '#191414',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: '70px',
  },
  progressBar: {
    color: 'white',
  },
  barContainer: {
    display: 'inline-block',
    width: '80%',
  },
});

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 30,
    borderRadius: 5,
    marginLeft: 300,
    marginRight: 30,
    marginBottom: 10,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: 'red',
  },
}))(LinearProgress);
