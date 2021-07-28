import React, { FC } from 'react';
// import AuthScreen from './components/screens/AuthScreen';
import HomeScreen from './components/screens/HomeScreen';
import LandingPage from './components/screens/LandingPage';
import PlaylistDetailScreen from './components/screens/PlaylistDetailScreen';

import './index.css';

export const App: FC = () => {
	return (
		<div>
			<LandingPage></LandingPage>
			{/* <HomeScreen></HomeScreen> */}
			<PlaylistDetailScreen />
		</div>
	);
};
