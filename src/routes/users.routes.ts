import { Router } from 'express';
import { CreateUserController } from '../modules/Users/useCases/createUser/createUser.controller';



const usersRouter = Router();
const createUserController = new CreateUserController()

usersRouter.post('/', createUserController.handle);


export default usersRouter;