import { Router } from 'express';
import { CreateUserController } from '../modules/Users/useCases/createUser/createUser.controller';
import { GetAllUsersController } from '../modules/Users/useCases/getAllUsers/getAllUsers.controller';
import { isAuthenticated } from '../middleware/isAuthenticated';



const usersRouter = Router();
const createUserController = new CreateUserController()
const getAllUserController = new GetAllUsersController()

usersRouter.post('/', createUserController.handle);
usersRouter.get('/', isAuthenticated, getAllUserController.handle);


export default usersRouter;