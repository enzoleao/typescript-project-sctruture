import usersRouter from './users.routes';
import memoryRouter from './memory.routes';
import mediasRoutes from './medias.routes'
import authenticateRoutes from './authenticate.routes'
import { Router } from 'express';
import { isAuthenticated } from '../middleware/isAuthenticated';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/memory',isAuthenticated, memoryRouter)
routes.use('/medias', mediasRoutes);
routes.use(authenticateRoutes)
export default routes;