import multer from 'multer';
import { Router } from 'express';
import { uploadAvatar } from '../middleware/upload/avatar';
import { CreateMemoryMediaController } from '../modules/Memory/useCase/createMemoryMedia/createMemoryMedia.controller';
import { DeleteMemoryMediaController } from '../modules/Memory/useCase/deleteMemoryMedia/deleteMediasMemory.controller';


const memoryRouter = Router();

const createMemoryMedia = new CreateMemoryMediaController()
const deleteMemoryMedia = new DeleteMemoryMediaController()


memoryRouter.post('/:memoryId', multer(uploadAvatar.getConfig).array("medias"), createMemoryMedia.handle)
memoryRouter.delete('/', deleteMemoryMedia.handle)

export default memoryRouter;