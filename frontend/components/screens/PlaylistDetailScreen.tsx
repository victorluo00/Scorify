import React, { FC } from 'react';
import Score from '../playlistDetails/Score';
import ScoreBreakdown from '../playlistDetails/ScoreBreakdown';
import Share from '../playlistDetails/Share';

const PlaylistDetailScreen: FC = () => {
	return (
		<>
			<Score />
			<Share />
			<ScoreBreakdown />
		</>
	);
};

export default PlaylistDetailScreen;
