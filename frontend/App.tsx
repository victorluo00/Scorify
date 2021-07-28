import React, {FC} from 'react';
// import AuthScreen from './components/screens/AuthScreen';
import HomeScreen from './components/screens/HomeScreen';
import LandingPage from './components/screens/LandingPage'

import './index.css';

export const App:FC = () => {
  
  return (<div>
    {/* <LandingPage></LandingPage> */}
    <HomeScreen></HomeScreen>
  </div>);
};
