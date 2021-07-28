
import React, { FC, useState } from 'react';
import { CssBaseline, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const PlaylistDetailScreen: FC = () => {
	const classes = useStyles();
	const [score, setScore] = useState(99);

	return (
		<>
			<CssBaseline />
			<Grid container component='main' className={classes.root}>
				<div>
					<Typography component='div' className={classes.text}>
						Litness Score
					</Typography>
					<Typography className={classes.score}>{score}</Typography>
				</div>
			</Grid>
		</>
	);
};

export default PlaylistDetailScreen;

const useStyles = makeStyles({
	root: {
		height: '100vh',
		paddingLeft: 0,
		paddingRight: 0,
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
	score: {
		color: 'white',
		fontSize: '400px',
		fontStyle: 'bold',
	},
});
