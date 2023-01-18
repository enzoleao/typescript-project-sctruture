import { Router } from 'express';
import usersRouter from './users.routes';

const routes = Router();

routes.use(usersRouter);

export default routes;