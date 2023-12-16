import { prisma } from '../../../../prisma'
import { IUserRepository } from '../User.repository'
import {
  CreateUserRequestDTO,
  CreateUserResponseDTO,
} from '../../dtos/createUser.dto'
import { User } from '@prisma/client'

export class UserRepository implements IUserRepository {
  async create(user: CreateUserRequestDTO): Promise<CreateUserResponseDTO> {
    const { name, email, password } = user
    const userCreated = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    })
    return { ...userCreated, password: undefined }
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    return user
  }

  async findUsers(): Promise<User[]> {
    const users = await prisma.user.findMany()
    return users
  }
}
