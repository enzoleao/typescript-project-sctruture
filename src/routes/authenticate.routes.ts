import multer from 'multer';
import { Router } from 'express';
import { AuthenticateUserController } from '../modules/Users/useCases/authenticateUser/authenticateUser.controller';
import { GetCurrentUserController } from '../modules/Users/useCases/getCurrentUser/getCurrentUser.controller';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { uploadAvatar } from '../middleware/upload/avatar';
import { UpdateUserAvatarController } from '../modules/Users/useCases/updateUserAvatar/updateUserAvatar.controller';
import { FindAllMemoriesController } from '../modules/Memory/useCase/findAllMemories/findAllMemories.controller';


const authenticateRoutes = Router();


const authenticateUserController = new AuthenticateUserController()
const getCurrentUserController = new GetCurrentUserController() 
const updateUserAvatarController = new UpdateUserAvatarController()
const findAllMemoriesController = new FindAllMemoriesController()
authenticateRoutes.get('/me',isAuthenticated, getCurrentUserController.handle);
authenticateRoutes.get('/allMemories',isAuthenticated, findAllMemoriesController.handle);
authenticateRoutes.post('/session', authenticateUserController.handle);
authenticateRoutes.put('/avatar/:userId', multer(uploadAvatar.getConfig).single("avatar"), updateUserAvatarController.handle)

export default authenticateRoutes;