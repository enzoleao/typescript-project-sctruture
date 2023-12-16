import { Router } from 'express'
import { CreateUserController } from '../modules/Users/useCases/Create/create.controller'
import { valiatePermission } from '../middleware/isAuthenticated'
import { AuthController } from '../modules/Users/useCases/Auth/auth.controller'
import { GetUsersController } from '../modules/Users/useCases/Get/get.controller'

const usersRouter = Router()

const createUserController = new CreateUserController()
const authUserController = new AuthController()
const getUsersController = new GetUsersController()

usersRouter.post('/', createUserController.handle)
usersRouter.post('/auth', authUserController.handle)
usersRouter.get('/', valiatePermission('users.get'), getUsersController.handle)
export default usersRouter
