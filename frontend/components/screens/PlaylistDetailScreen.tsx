import React, { FC } from 'react';
import FilterGenreMood from '../playlistDetails/FilterGenreMood';
import GenreBreakdown from '../playlistDetails/GenreBreakdown';
import Score from '../playlistDetails/Score';
import ScoreBreakdown from '../playlistDetails/ScoreBreakdown';
import Share from '../playlistDetails/Share';

const PlaylistDetailScreen: FC = () => {
	return (
		<>
			<Score />
			<Share />
			<ScoreBreakdown />
			<GenreBreakdown />
			<FilterGenreMood />
		</>
	);
};

export default PlaylistDetailScreen;
