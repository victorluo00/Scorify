import React, { FC } from 'react';
import { CssBaseline, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const GenreBreakdown: FC = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Grid container component="main" className={classes.root}>
        <Typography component="div" className={classes.text}>
          Genre Breakdown
        </Typography>
        <div>
          <Doughnut data={data} className={classes.doughnutContainer} />
        </div>
      </Grid>
    </>
  );
};

export default GenreBreakdown;

const useStyles = makeStyles({
  root: {
    height: '100vh',
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
  doughnutContainer: {
    height: '200%',
    color: 'white',
  },
});
