import { User } from '@prisma/client'
import {
  CreateUserRequestDTO,
  CreateUserResponseDTO,
} from '../dtos/createUser.dto'

export interface IUserRepository {
  create(user: CreateUserRequestDTO): Promise<CreateUserResponseDTO>
  findUserByEmail(email: string): Promise<User | null>
  findUsers(): Promise<User[]>
}
