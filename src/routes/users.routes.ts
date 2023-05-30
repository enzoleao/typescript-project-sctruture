import { Router } from 'express';
import { CreateUserController } from '../modules/Users/useCases/createUser/createUser.controller';
import { GetAllUsersController } from '../modules/Users/useCases/getAllUsers/getAllUsers.controller';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { DeleteUserController } from '../modules/Users/useCases/deleteUser/deleteUser.controller';
import { UpdateUserController } from '../modules/Users/useCases/updateUser/updateUser.controller';



const usersRouter = Router();
const createUserController = new CreateUserController()
const getAllUserController = new GetAllUsersController()
const deleteUserController = new DeleteUserController()
const updateUserController = new UpdateUserController()

usersRouter.get('/', isAuthenticated, getAllUserController.handle);
usersRouter.post('/', createUserController.handle);
usersRouter.put('/:id', isAuthenticated, updateUserController.handle)
usersRouter.delete('/:id', isAuthenticated, deleteUserController.handle);

export default usersRouter;