import { hash } from "bcrypt";
import { IUserRepository } from "../../repositories/User.repository";
import { createUserRequestDTO } from '../../dtos/createUserRequestDTO'
import { createUserResponseDTO } from '../../dtos/createUserResponseDTO'
import { AppError } from "../../../../err/AppError";
import fs from 'fs'
export class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ){}

    async execute({
        email,
        name,
        password,
        birthday,
        number,
        username
        
    }: createUserRequestDTO): Promise<createUserResponseDTO>{
        const userAlreadyExists = await this.userRepository.findByEmail(email)
        
        if (userAlreadyExists) {
            throw new AppError("User already exists")
        }
        const passwordHash = await hash(password, 8)
        
        const createdUser = await this.userRepository.create({
            email,
            name,
            password: passwordHash,
            birthday,
            number,
            username
        })
        return createdUser
    }
}