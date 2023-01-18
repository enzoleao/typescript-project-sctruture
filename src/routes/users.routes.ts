import { Router } from 'express';
import usersController from '../controllers/users.controller'
const usersRouter = Router();

usersRouter.get('/teste',usersController.GetInit);

export default usersRouter;