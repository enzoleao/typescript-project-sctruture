import { prisma } from '../../../../prisma'
import { IUserRepository } from '../User.repository'
import {
  CreateUserRequestDTO,
  CreateUserResponseDTO,
} from '../../dtos/CreateUserDTO'

export class UserRepository implements IUserRepository {
  async create(user: CreateUserRequestDTO): Promise<CreateUserResponseDTO> {
    const response = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        username: user.username,
        number: user.number,
        birthday: user.birthday,
        password: user.password,
      },
    })
    return {
      id: response.id,
      name: response.name,
      email: response.email,
      username: response.username,
      number: response.number,
      birthday: response.birthday,
    }
  }
}
