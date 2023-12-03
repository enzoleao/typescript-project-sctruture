import {
  CreateUserRequestDTO,
  CreateUserResponseDTO,
} from '../dtos/CreateUserDTO'

export interface IUserRepository {
  create(user: CreateUserRequestDTO): Promise<CreateUserResponseDTO>
}
