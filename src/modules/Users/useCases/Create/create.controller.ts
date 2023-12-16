import { Request, Response } from 'express'
import { CreateUserRequestDTO } from '../../dtos/createUser.dto'
import { CreateUserUseCase } from './create.usecase'
import { UserRepository } from '../../repositories/implementations/User.repository'

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createUserUseCase = new CreateUserUseCase(new UserRepository())

    const { email, name, password } = req.body as CreateUserRequestDTO

    const createdUser = await createUserUseCase.execute({
      email,
      name,
      password,
    })
    return res.status(201).json({ createdUser })
  }
}
