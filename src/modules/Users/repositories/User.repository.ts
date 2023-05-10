import { createUserRequestDTO } from '../dtos/createUserRequestDTO'
import { createUserResponseDTO } from '../dtos/createUserResponseDTO'
import { User } from '@prisma/client'
import { userResponseDTO } from '../dtos/userResponseDTO'


export interface IUserRepository {
    create(user: createUserRequestDTO): Promise<createUserResponseDTO>
    findByEmail(email: string): Promise<User | null>
    findById(id: string): Promise<userResponseDTO | null>
    findAll(): Promise<any | null>
    updateUserAvatar({ avatar, userId } : any): Promise<any | null>
    createUserAvatar({avatar, userId}: any): Promise<any | null>
}