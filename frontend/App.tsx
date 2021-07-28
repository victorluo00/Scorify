import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import React, {FC} from 'react';
// import AuthScreen from './components/screens/AuthScreen';
import HomeScreen from './components/screens/HomeScreen';
import LandingPage from './components/screens/LandingPage'

import './index.css';

export const App:FC = () => {
  
  return (<div>
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path="/home" component={HomeScreen} />
        {/* <Route path="/user/:accessToken/:refreshToken" component={HomeScreen} /> */}
      </Switch>
    </Router>
  </div>);
};
