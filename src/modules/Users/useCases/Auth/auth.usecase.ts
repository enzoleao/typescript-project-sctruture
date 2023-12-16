/* eslint-disable no-useless-constructor */
import { compare, hash } from 'bcrypt'
import { IUserRepository } from '../../repositories/User.repository'
import { AppError } from '../../../../err/AppError'
import {
  AuthUserRequestDTO,
  AuthUserResponseDTO,
} from '../../dtos/authUser.dto'
import { sign } from 'jsonwebtoken'

export class AuthUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({
    email,
    password,
  }: AuthUserRequestDTO): Promise<AuthUserResponseDTO> {
    const userExists = await this.userRepository.findUserByEmail(email)

    if (!userExists) {
      throw new AppError('E-mail e/ou senha incorretos!')
    }
    const passwordMatch = await compare(password, userExists.password)
    if (!passwordMatch) {
      throw new AppError('E-mail e/ou senha incorretos!')
    }

    const token = sign({}, process.env.SECRETJWT as string, {
      subject: userExists.id,
      expiresIn: '1d',
    })
    return {
      user: { ...userExists, password: undefined },
      authorization: { token },
    }
  }
}
