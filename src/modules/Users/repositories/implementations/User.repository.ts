import { prisma } from "../../../../prisma";
import { User } from "@prisma/client";
import { IUserRepository } from '../User.repository';
import { createUserRequestDTO } from '../../dtos/createUserRequestDTO';
import { createUserResponseDTO } from '../../dtos/createUserResponseDTO';
import { updateUserRequestDTO } from "../../dtos/updateUserRequestDTO";
import { updateUserResponseDTO } from "../../dtos/updateUserResponseDTO";
import { updateUserAvatarRequestDTO } from "../../dtos/updateUserAvatarRequestDTO";


export class UserRepository implements IUserRepository {

   
    async findById(id: string): Promise<any> {
        const userResponse = await prisma.user.findUniqueOrThrow({
            where: { 
                id: id
             },
            include: {
                memories: true
            }
        })
        
        return {
            id: userResponse.id,
            avatar: `${process.env.PROTOCOL}://${process.env.HOST}/${userResponse.avatar}`,
            name: userResponse.name,
            email: userResponse.email,
            birthday: userResponse.birthday
        }
    }

    async create(user: createUserRequestDTO): Promise<createUserResponseDTO> {
        const response = await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              password: user.password,
              birthday: user.birthday,
            }
        })
        return {
              id: response.id,
              name: response.name,
              email: response.email,
              birthday: response.birthday
        }
    }

    async updateAvatar(user: updateUserRequestDTO): Promise<updateUserResponseDTO | null> {
        
        const response = await prisma.user.update({
            where:{
                id: user.id
            },
            data: {
                name: user.name,
                avatar: user.avatar,
            }
        })
       
        return {
            id: response.id,
            name: response.name,
            avatar: `${process.env.PROTOCOL}://${process.env.HOST}/${response.avatar}`,
        }
    }

    async findByEmail(email: string): Promise<User | null> {
        const response = await prisma.user.findUnique({
            where:{
                email
            }
        })

        return response
    }
    async createUserAvatar({ avatar, userId }: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async updateUserAvatar({ avatar, userId }: updateUserAvatarRequestDTO): Promise<any> {
        const response = await prisma.user.update({
            where: {
                id:userId
            },
            data: {
                avatar: avatar
            }
        })
        return {
            id: response.id,
            avatar: `${process.env.PROTOCOL}://${process.env.HOST}/${response.avatar}`,
        }
    }
}