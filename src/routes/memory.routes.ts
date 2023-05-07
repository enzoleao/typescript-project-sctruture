import multer from 'multer';
import { Router } from 'express';
import { AllMemoriesCurrentUserController } from '../modules/Memory/useCase/allMemoriesCurrentUser/allMemoriesCurrentUser.controller';
import { CreateMemoryController } from '../modules/Memory/useCase/createMemory/createMemory.controller';
import { uploadAvatar } from '../middleware/upload/avatar';
import { CreateMemoryMediaController } from '../modules/Memory/useCase/createMemoryMedia/createMemoryMedia.controller';
import { DeleteMemoryMediaController } from '../modules/Memory/useCase/deleteMemoryMedia/deleteMediasMemory.controller';
import { addPeopleInMemoryController } from '../modules/Memory/useCase/addPeoplesInMemory/addPeopleInMemory.controller';
import { RemovePeopleInMemoryController } from '../modules/Memory/useCase/removePeopleInMemory/removePeopleInMemory.controller';


const memoryRouter = Router();

const allMemoriesCurrentUserController = new AllMemoriesCurrentUserController()
const createMemoryController = new CreateMemoryController()
const createMemoryMedia = new CreateMemoryMediaController()
const deleteMemoryMedia = new DeleteMemoryMediaController()
const addPeopleInMemory = new addPeopleInMemoryController()
const removePeopleInMemory = new RemovePeopleInMemoryController()

memoryRouter.get('/', allMemoriesCurrentUserController.handle);
memoryRouter.post('/', createMemoryController.handle)
memoryRouter.post('/medias', multer(uploadAvatar.getConfig).array("medias"), createMemoryMedia.handle)
memoryRouter.delete('/medias', deleteMemoryMedia.handle)
memoryRouter.post('/addPeople', addPeopleInMemory.handle)
memoryRouter.delete('/removePeople', removePeopleInMemory.handle )

export default memoryRouter;