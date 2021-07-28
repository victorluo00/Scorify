import { Router, Request, Response } from 'express';
import { playlistController } from '../controllers/index';

const router = Router();

//example req route
// router.get(
//   '/:id',
//   playlistController.getPlaylist,
//   (req: Request, res: Response) => {
//     return res.status(200).json(res.locals.playlist);
//   }
// );

router.get(
  '/',
  playlistController.loadDataMiddleware,
  playlistController.getPlaylistData,
  (req, res) => {
    res.status(200).json({ playlist: res.locals.playlistObj });
  }
);

export default router;
