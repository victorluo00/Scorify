import React, { FC, useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Progress, Segment } from 'semantic-ui-react';


const ScoreBreakdown: FC = () => {
	const classes = useStyles();
	const [percent, setPercent] = useState(20);


	return (
		<Grid container component='main' className={classes.root}>
			<Typography className={classes.text}>Score Breakdown</Typography>
			<Segment inverted> 
				<Progress
					percent={20}
					size='large'
					color='grey'
					progress='percent'
					indicating
					label='LABEL HERE'
					className={classes.progressBar}
				/>
				<Progress
					percent={20}
					size='large'
					color='grey'
					progress='percent'
					indicating
					label='LABEL HERE'
					className={classes.progressBar}
				/>
			</Segment>
		</Grid>
	)};

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
	
export default ScoreBreakdown;