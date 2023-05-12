import { Router } from 'express';
import { CreateReflectionsController } from '../modules/Memory/useCase/createReflections/createReflections.controller';
import { DeleteReflectionsController } from '../modules/Memory/useCase/deleteReflections/deleteReflections.controller';
import { UpdateReflectionsController } from '../modules/Memory/useCase/updateReflections/updateReflections.controller';

const reflectionsRouter = Router();

const createReflectionsController = new CreateReflectionsController()
const deleteReflectionsController = new DeleteReflectionsController()
const updateReflectionsController = new UpdateReflectionsController()
reflectionsRouter.post('/', createReflectionsController.handle)
reflectionsRouter.put('/:reflectionId', updateReflectionsController.handle)
reflectionsRouter.delete('/:reflectionId', deleteReflectionsController.handle)

export default reflectionsRouter;