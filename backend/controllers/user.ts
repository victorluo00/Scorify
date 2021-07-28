import { Request, Response, NextFunction } from 'express';

const fetch = require('node-fetch');
const { SPOTIFY_TOKEN } = require('../env.ts');

class UserController {
  async getUserData(req: Request, res: Response, next: NextFunction) {
    const rawData = await fetch(
      `https://api.spotify.com/v1/users/${req.params.id}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + SPOTIFY_TOKEN,
        },
      }
    );

    res.locals.user = await rawData.json();

    next();
  }
}

const userController = new UserController();

export default userController;
