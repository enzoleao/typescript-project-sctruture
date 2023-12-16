import { User } from '@prisma/client'
import { IUserRepository } from '../../repositories/User.repository'
export class GetUsersUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.findUsers()
    return users
  }
}
