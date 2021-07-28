import React, { FC } from 'react';
import { CssBaseline, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const GenreBreakdown: FC = () => {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<Grid container component='main' className={classes.root}>
				<Typography component='div' className={classes.text}>
					Genre Breakdown
				</Typography>
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
});
