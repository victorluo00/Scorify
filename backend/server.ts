import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

import { playlistRouter } from './routers/index';

const PORT = 3000;

// global middleware
const app = express();
app.use(express.json());

// authorization
// app.get('/auth/spotify', passport.authenticate('spotify'));

// app.get(
//   '/auth/spotify/callback',
//   passport.authenticate('spotify', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   }
// );

// root directory, send index.html
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../frontend/index.html'));
});

// send js bundle
// app.get('/dist/bundle.js', (req, res)=>{
//   res.status(200).sendFile(path.join(__dirname, '../build/bundle.js'));
// });

// routing
app.use('/api/playlist', playlistRouter);

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
