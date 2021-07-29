import React, { FC } from 'react';
import FilterGenreMood from '../playlistDetails/FilterGenreMood';
import GenreBreakdown from '../playlistDetails/GenreBreakdown';
import Score from '../playlistDetails/Score';
import ScoreBreakdown from '../playlistDetails/ScoreBreakdown';
import Share from '../playlistDetails/Share';

interface Props {
  playlistName: string;
  playlistId: number;
  photo: string;
  rating: object;
  songs: Array<any>;
}

const PlaylistDetailScreen = ({playlistName, playlistId, photo, rating, songs}: Props) => {
	console.log('playlistName: ', playlistName)
	console.log('playlistId: ', playlistId)
	console.log('photo: ', photo)
	console.log('rating: ', rating)
	console.log('songs: ', songs)

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
