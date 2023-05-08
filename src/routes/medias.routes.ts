import multer from 'multer';
import { Router } from 'express';
import { uploadAvatar } from '../middleware/upload/avatar';
import { CreateMemoryMediaController } from '../modules/Memory/useCase/createMemoryMedia/createMemoryMedia.controller';
import { DeleteMemoryMediaController } from '../modules/Memory/useCase/deleteMemoryMedia/deleteMediasMemory.controller';


const mediasRouter = Router();

const createMemoryMedia = new CreateMemoryMediaController()
const deleteMemoryMedia = new DeleteMemoryMediaController()


mediasRouter.post('/', multer(uploadAvatar.getConfig).array("medias"), createMemoryMedia.handle)
mediasRouter.delete('/:memoryId', deleteMemoryMedia.handle)

export default mediasRouter;