import { Router } from 'express';
import { CreateUserController } from '../modules/Users/useCases/createUser/createUser.controller';
import { GetAllUsersController } from '../modules/Users/useCases/getAllUsers/getAllUsers.controller';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { DeleteUserController } from '../modules/Users/useCases/deleteUser/deleteUser.controller';



const usersRouter = Router();
const createUserController = new CreateUserController()
const getAllUserController = new GetAllUsersController()
const deleteUserController = new DeleteUserController()
usersRouter.get('/', isAuthenticated, getAllUserController.handle);
usersRouter.post('/', createUserController.handle);
usersRouter.delete('/:id', isAuthenticated, deleteUserController.handle);

export default usersRouter;