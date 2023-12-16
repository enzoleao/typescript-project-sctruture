import { hash } from 'bcrypt'
import { IUserRepository } from '../../repositories/User.repository'
import {
  CreateUserResponseDTO,
  CreateUserRequestDTO,
} from '../../dtos/createUser.dto'
import { AppError } from '../../../../err/AppError'
export class CreateUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private userRepository: IUserRepository) {}

  async execute({
    email,
    name,
    password,
  }: CreateUserRequestDTO): Promise<CreateUserResponseDTO> {
    const userAlreadyExists = await this.userRepository.findUserByEmail(email)
    if (userAlreadyExists) {
      throw new AppError('E-mail já cadastrado !', 400)
    }
    const passwordHash = await hash(password, 8)

    const createdUser = await this.userRepository.create({
      email,
      name,
      password: passwordHash,
    })
    return createdUser
  }
}
