import { Router } from 'express';
import { AllMemoriesCurrentUserController } from '../modules/Memory/useCase/allMemoriesCurrentUser/allMemoriesCurrentUser.controller';
import { CreateMemoryController } from '../modules/Memory/useCase/createMemory/createMemory.controller';
import { DeleteMemoryController } from '../modules/Memory/useCase/deleteMemory/deleteMemory.controller';
import { UpdateMemoryController } from '../modules/Memory/useCase/updateMemory/updateMemory.controller';


const memoryRouter = Router();

const allMemoriesCurrentUserController = new AllMemoriesCurrentUserController()
const createMemoryController = new CreateMemoryController()
const deleteMemoryController = new DeleteMemoryController()
const updateMemoryController = new UpdateMemoryController()

memoryRouter.get('/', allMemoriesCurrentUserController.handle);
memoryRouter.post('/', createMemoryController.handle)
memoryRouter.put('/:memoryId', updateMemoryController.handle)
memoryRouter.delete('/:memoryId', deleteMemoryController.handle )

export default memoryRouter;