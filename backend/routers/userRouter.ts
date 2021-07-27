import { Router, Request, Response } from 'express';
import { userController } from '../controllers/index';

const router = Router();

router.get(
  '/:id',
  userController.getUserData,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.user);
  }
);

export default router;
