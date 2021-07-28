import React, { FC } from 'react';
import Score from '../playlistDetails/Score';
import Share from '../playlistDetails/Share';

const PlaylistDetailScreen: FC = () => {
	return (
		<>
			<Score />
			<Share />
		</>
	);
};

export default PlaylistDetailScreen;
