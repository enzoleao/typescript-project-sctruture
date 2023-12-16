import { Request, Response } from 'express'
import { UserRepository } from '../../repositories/implementations/User.repository'
import { GetUsersUseCase } from './get.usecase'

export class GetUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const getUsersUseCase = new GetUsersUseCase(new UserRepository())

    const data = await getUsersUseCase.execute()
    return res.status(200).json({ data })
  }
}
