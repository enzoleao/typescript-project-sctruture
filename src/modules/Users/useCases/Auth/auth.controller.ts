import { Request, Response } from 'express'
import { UserRepository } from '../../repositories/implementations/User.repository'
import { AuthUserRequestDTO } from '../../dtos/authUser.dto'
import { AuthUseCase } from './auth.usecase'

export class AuthController {
  async handle(req: Request, res: Response): Promise<Response> {
    const authUseCase = new AuthUseCase(new UserRepository())

    const { email, password } = req.body as AuthUserRequestDTO

    const response = await authUseCase.execute({ email, password })
    return res.status(200).json(response)
  }
}
