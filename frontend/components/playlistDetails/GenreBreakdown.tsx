import React from 'react';
import { CssBaseline, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Doughnut } from 'react-chartjs-2';

let data = {
	labels: ['Bad', 'Meh', 'Decent', 'Bop'],
	datasets: [
		{
			label: '',
			data: [0, 0, 0, 0],
			backgroundColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
			],
			borderWidth: 1,
		},
	],
};

const GenreBreakdown = ({ songs }: any) => {
	const classes = useStyles();

  for (const song of songs){
    console.log(song.rating)
    console.log(data.datasets[0].data)

      if (song.rating<25){
        data.datasets[0].data[0]++;
      } else if (song.rating<50){
        data.datasets[0].data[1]++;
      } else if (song.rating<75){
        data.datasets[0].data[2]++;
      } else {
        data.datasets[0].data[3]++;
      }  
  }



	return (
		<>
			<CssBaseline />
			<Grid container component='main' className={classes.root}>
				<Typography component='div' className={classes.text}>
					Boppy Meter
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
