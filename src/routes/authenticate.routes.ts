import multer from 'multer';
import { Router } from 'express';
import { AuthenticateUserController } from '../modules/Users/useCases/authenticateUser/authenticateUser.controller';
import { GetCurrentUserController } from '../modules/Users/useCases/getCurrentUser/getCurrentUser.controller';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { uploadAvatar } from '../middleware/upload/avatar';
import { UpdateUserAvatarController } from '../modules/Users/useCases/updateUserAvatar/updateUserAvatar.controller';


const authenticateRoutes = Router();


const authenticateUserController = new AuthenticateUserController()
const getCurrentUserController = new GetCurrentUserController() 
const updateUserAvatarController = new UpdateUserAvatarController()

authenticateRoutes.post('/session', authenticateUserController.handle);
authenticateRoutes.get('/me',isAuthenticated, getCurrentUserController.handle);
authenticateRoutes.put('/avatar/:userId', multer(uploadAvatar.getConfig).single("avatar"), updateUserAvatarController.handle)

export default authenticateRoutes;