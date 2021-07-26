import { Request, Response, NextFunction } from 'express';

class PlaylistController {
  getPlaylist(req: Request, res: Response, next: NextFunction) {
    console.log('Hello hello');
    next();
  }
}

const playlistController = new PlaylistController();

export default playlistController;
