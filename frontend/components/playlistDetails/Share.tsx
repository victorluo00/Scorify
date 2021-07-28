import React, { FC } from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const Share: FC = () => {
	const classes = useStyles();

	return (
		<>
			<Grid container component='main' className={classes.root}>
				<div>
					<Button
						variant='contained'
						className={classes.instagram}
						startIcon={<InstagramIcon className={classes.icon} />}
					>
						Instagram
					</Button>
					<Button
						variant='contained'
						className={classes.twitter}
						startIcon={<TwitterIcon className={classes.icon} />}
					>
						Twitter
					</Button>
				</div>
			</Grid>
		</>
	);
};

export default Share;

const useStyles = makeStyles({
	root: {
		height: '20vh',
		paddingLeft: 0,
		paddingRight: 0,
		backgroundColor: '#191414',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		color: 'white',
	},
	instagram: {
		backgroundColor: '#fe4164',
		margin: '30px',
	},
	twitter: {
		backgroundColor: '#1DA1F2',
		margin: '30px',
	},
});
