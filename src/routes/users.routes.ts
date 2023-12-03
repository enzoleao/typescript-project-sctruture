import { Router } from 'express'
import { CreateUserController } from '../modules/Users/useCases/createUser/createUser.controller'
import { isAuthenticated } from '../middleware/isAuthenticated'

const usersRouter = Router()

const createUserController = new CreateUserController()
usersRouter.post('/', createUserController.handle)

export default usersRouter
