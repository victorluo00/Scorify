import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
const cors = require('cors');

const cookieParser = require('cookie-parser');
const { CLIENT_ID, CLIENT_SECRET } = require('./env.ts');

const querystring = require('querystring');

import { playlistRouter, userRouter } from './routers/index';

const PORT = 3000;
// global middleware
const app = express();
app.use(express.json());
app.use(cookieParser());
// app.use(cors());
app.use(cors({ credentials: true, origin: 'http://localhost:8080' }));

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, authorization'
//   );
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });

// root directory, send index.html
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../frontend/index.html'));
});

//========================================================
//                     SPOTIFY OAUTH
//========================================================

const redirect_uri =
  process.env.REDIRECT_URI || 'http://localhost:3000/callback';
const request = require('request');

app.get('/login', function (req, res) {
  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: CLIENT_ID,
        scope: 'user-read-private user-read-email',
        redirect_uri,
      })
  );
});

app.get('/callback', function (req, res) {
  const code = req.query.code || null;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'authorization_code',
    },
    headers: {
      Authorization:
        'Basic ' +
        new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
    },
    json: true,
  };

  request.post(
    authOptions,
    function (error: any, response: Response, body: any) {
      const access_token = body.access_token;
      const uri = 'http://localhost:8080/home';
      res.cookie('access_token', access_token);
      res.redirect(uri);
    }
  );
});

// app.get('/home', loadDataMiddleware, (req, res) => {
//   res
//     .status(200)
//     .json({ user: res.locals.user, playlist: res.locals.playlists });
// });

/////////////////////////////////////////////////////////

// send js bundle
// app.get('/dist/bundle.js', (req, res)=>{
//   res.status(200).sendFile(path.join(__dirname, '../build/bundle.js'));
// });

// routing
app.use('/playlist', playlistRouter);
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
