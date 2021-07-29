import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { FC } from 'react';
// import AuthScreen from './components/screens/AuthScreen';
import HomeScreen from './components/screens/HomeScreen';
import LandingPage from './components/screens/LandingPage';
import PlaylistDetailScreen from './components/screens/PlaylistDetailScreen';

import './index.css';

export const App: FC = () => {
  return (
    <div>
      {/* <PlaylistDetailScreen /> */}
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={HomeScreen} />
          <Route
            path="/user/:accessToken/:refreshToken"
            component={HomeScreen}
          />
          {/* <Route path="/playlistdetails" component={PlaylistDetailScreen} /> */}
          <Route
            path="/playlistdetails"
            render={(props) => <PlaylistDetailScreen {...props} />}
          ></Route>
=======
          <Route exact path='/' component={LandingPage} />
          {/* <Route path='/home' component={HomeScreen} /> */}
          {/* <Route path="/user/:accessToken/:refreshToken" component={HomeScreen} /> */}
          <Route path='/playlistdetails' component={PlaylistDetailScreen} />
>>>>>>> f639ac4c199d9b7a8d3e6448a5603f98944b17f0
        </Switch>
      </Router>
    </div>
  );
};
