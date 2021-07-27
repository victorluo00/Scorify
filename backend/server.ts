import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const { CLIENT_ID, CLIENT_SECRET } = require('./env.ts');

import { playlistRouter, userRouter } from './routers/index';

const PORT = 3000;
// global middleware
const app = express();
app.use(express.json());

// root directory, send index.html
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../frontend/index.html'));
});

//========================================================
//                     SPOTIFY OAUTH
//========================================================
passport.use(
  new SpotifyStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/api/auth/spotify/user',
    },
    function (
      accessToken: String,
      refreshToken: String,
      expires_in: Date,
      profile: Object,
      done: Function
    ) {
      // User.findOrCreate({ spotifyId: profile.id }, function (err, user) {
      //   return done(err, user);
      // });
      console.log(profile);
      done();
    }
  )
);

app.use(passport.initialize());
app.use(passport.session());
app.use('/auth/spotify', passport.authenticate('spotify'));

app.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

// send js bundle
// app.get('/dist/bundle.js', (req, res)=>{
//   res.status(200).sendFile(path.join(__dirname, '../build/bundle.js'));
// });

// routing
app.use('/api/playlist', playlistRouter);
app.use('/api/user', userRouter);

// 404
app.use((req, res) => {
  res.status(404).json({});
});

// global error
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.log('Error: ' + (err.log || 'unknown error occured'));
  res.status(err.status || 500).send(err.message || 'unknown error');
});

// listen
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
// .catch((err) => console.error(err));
