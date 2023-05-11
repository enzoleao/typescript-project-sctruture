import { Router } from 'express';
import { CreateReflectionsController } from '../modules/Memory/useCase/createReflections/createReflections.controller';

const reflectionsRouter = Router();

const createReflectionsController = new CreateReflectionsController()

reflectionsRouter.post('/', createReflectionsController.handle)

export default reflectionsRouter;