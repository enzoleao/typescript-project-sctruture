import { Router } from 'express';
import { CreateReflectionsController } from '../modules/Memory/useCase/createReflections/createReflections.controller';
import { DeleteReflectionsController } from '../modules/Memory/useCase/deleteReflections/deleteReflections.controller';

const reflectionsRouter = Router();

const createReflectionsController = new CreateReflectionsController()
const deleteReflectionsController = new DeleteReflectionsController()

reflectionsRouter.post('/', createReflectionsController.handle)
reflectionsRouter.put('/:reflectionId', deleteReflectionsController.handle)
reflectionsRouter.delete('/:reflectionId', deleteReflectionsController.handle)

export default reflectionsRouter;