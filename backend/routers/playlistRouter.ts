import { Router, Request, Response } from 'express';
import { playlistController } from '../controllers/index';

const router = Router();

//example req route
router.get(
  '/testmsg',
  playlistController.getPlaylist,
  (req: Request, res: Response) => {
    return res.status(200).json({ hello: ' hello' });
  }
);

export default router;
