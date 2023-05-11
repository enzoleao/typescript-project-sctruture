import usersRouter from './users.routes';
import memoryRouter from './memory.routes';
import mediasRoutes from './medias.routes'
import authenticateRoutes from './authenticate.routes'
import usersInMemory from './usersInMemory.routes';
import reflectionsRouter from './reflections.routes';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { Router } from 'express';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/memories',isAuthenticated, memoryRouter)
routes.use('/medias', mediasRoutes);
routes.use('/usersinmemory', usersInMemory)
routes.use('/reflections', isAuthenticated, reflectionsRouter)
routes.use(authenticateRoutes)

export default routes;