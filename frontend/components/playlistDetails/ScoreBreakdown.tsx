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
import { Radar } from 'react-chartjs-2';

const ScoreBreakdown = ({ rating }: any) => {
	const classes = useStyles();
	//if you want to use rating, use rating.rating
	const { danceability, energy, loudness, valence, mode, speechiness } = rating;

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

	const mockAverageData: PlaylistRating = {
		valence: 0.8324,
		energy: 0.4321,
		danceability: 0.5231,
		speechiness: 0.6213,
		mode: 0.613,
		loudness: 0.756765,
	};

	const data = {
		labels: [
			'Valence',
			'Energy',
			'Danceability',
			'Speechiness',
			'Mode',
			'Loudness',
		],
		datasets: [
			{
				label: 'This Playlist',
				data: [
					valence * 100,
					energy * 100,
					danceability * 100,
					speechiness * 100,
					mode * 100,
					loudness * 100,
				],
				backgroundColor: 'rgba(255, 99, 132, 0.7)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1,
				// lineTension: 0.4,
			},
			{
				label: 'Average Score',
				data: Object.values(mockAverageData).map(el => el * 100),
				backgroundColor: 'rgba(99, 185, 255, 0.3',
				borderColor: 'rgba(99, 185, 255, 1)',
				borderWidth: 1,
				// lineTension: 1,
			},
		],
	};

	const options = {
		plugins: {
			legend: {
				labels: {
					// This more specific font property overrides the global property
					font: {
						size: 24,
					},
				},
			},
		},
		scales: {
			r: {
				ticks: {
					beginAtZero: true,
					backdropColor: '#191414',
					color: [
						'#FF0000',
						'#FF0000',
						'#FF0000', //1
						'#FF3400', //2
						'#FF6900', //3
						'#FF9E00', //4
						'#FFD300', //5
						'#F7FF00', //6
						'#C2FF00', //7
						'#8DFF00',
						'#8DFF00', //8, //9 //10
					],
					font: {
						size: 18,
					},
				},
				pointLabels: {
					font: {
						size: 20,
					},
					color: 'white',
				},
				grid: {
					// circular: true,
					color: [
						'#FF0000',
						'#FF0000',
						'#FF0000',
						'#FF3400',
						'#FF6900',
						'#FF9E00',
						'#FFD300',
						'#F7FF00',
						'#C2FF00',
						'#8DFF00',
					],
				},
				angleLines: {
					color: 'white',
				},
				suggestedMin: 0,
				suggestedMax: 100,
			},
		},
	};

	return (
		<Grid container component='main' className={classes.root}>
			<Typography className={classes.text}>Score Breakdown</Typography>
			<div>
				<Radar
					className={classes.radarContainer}
					data={data}
					options={options}
				></Radar>
			</div>
			{/* <Grid spacing={2} container direction="column">
        {Object.keys(mockData).map((key: keyof PlaylistRating) => {
          return (
            <div>
              <Grid xs spacing={2}>
                <span>hello</span>
                <BorderLinearProgress
                  value={mockData[key] * 100}
                  variant="determinate"
                  title="test"
                />
              </Grid>
            </div>
          );
        })}
      </Grid> */}

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
	progressBar: {
		color: 'white',
	},
	barContainer: {
		display: 'inline-block',
		width: '80%',
	},
	radarContainer: {
		width: '80vh',
		height: '80vh',
	},
});

const BorderLinearProgress = withStyles(theme => ({
	root: {
		height: 500,
		borderRadius: 5,
		marginLeft: 30,
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
