import { Router, Request, Response } from 'express';

const usersRouter = Router();

usersRouter.get('/teste', (req: Request, res: Response) => {
    return res.json("OK");
});

export default usersRouter;