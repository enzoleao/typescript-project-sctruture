import { Router } from 'express';
import { AllMemoriesCurrentUserController } from '../modules/Memory/useCase/allMemoriesCurrentUser/allMemoriesCurrentUser.controller';
import { CreateMemoryController } from '../modules/Memory/useCase/createMemory/createMemory.controller';


const memoryRouter = Router();

const allMemoriesCurrentUserController = new AllMemoriesCurrentUserController()
const createMemoryController = new CreateMemoryController()

memoryRouter.get('/', allMemoriesCurrentUserController.handle);
memoryRouter.post('/', createMemoryController.handle)

export default memoryRouter;