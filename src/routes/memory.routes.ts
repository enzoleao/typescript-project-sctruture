import { Router } from 'express';
import { AllMemoriesCurrentUserController } from '../modules/Memory/useCase/allMemoriesCurrentUser/allMemoriesCurrentUser.controller';
import { CreateMemoryController } from '../modules/Memory/useCase/createMemory/createMemory.controller';
import { DeleteMemoryController } from '../modules/Memory/useCase/deleteMemory/deleteMemory.controller';


const memoryRouter = Router();

const allMemoriesCurrentUserController = new AllMemoriesCurrentUserController()
const createMemoryController = new CreateMemoryController()
const deleteMemoryController = new DeleteMemoryController()

memoryRouter.get('/', allMemoriesCurrentUserController.handle);
memoryRouter.post('/', createMemoryController.handle)
memoryRouter.delete('/:memoryId', deleteMemoryController.handle )

export default memoryRouter;