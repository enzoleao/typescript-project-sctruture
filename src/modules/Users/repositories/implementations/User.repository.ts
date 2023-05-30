import { prisma } from "../../../../prisma";
import { User } from "@prisma/client";
import { IUserRepository } from '../User.repository';
import { createUserRequestDTO } from '../../dtos/createUserRequestDTO';
import { createUserResponseDTO } from '../../dtos/createUserResponseDTO';
import { updateUserRequestDTO } from "../../dtos/updateUserRequestDTO";
import { updateUserResponseDTO } from "../../dtos/updateUserResponseDTO";
import { updateUserAvatarRequestDTO } from "../../dtos/updateUserAvatarRequestDTO";


export class UserRepository implements IUserRepository {
    async delete(id: string): Promise<User | null> {
        const response = await prisma.user.delete({
            where:{
                id
            }
        })
        return response
    }
    async findAll(): Promise<any> {
        const response = await prisma.user.findMany()
        return response.map((i)=>{
            return {
                id: i.id,
                name: i.name,
                email: i.email,
                birthday: i.birthday,
                avatar: `${process.env.PROTOCOL}://${process.env.HOST}/${i.avatar}`
            }
        })
    }
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
            username: userResponse.username,
            number: userResponse.number,
            birthday: userResponse.birthday
        }
    }

    async create(user: createUserRequestDTO): Promise<createUserResponseDTO | any> {
        const response = await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              username: user.username,
              number: user.number,
              birthday: user.birthday,
              password: user.password
            }
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
    async updateUser({ id, email, name, username, number, birthday, password}:any): Promise<any | null> {
        
       const user = await prisma.user.findUniqueOrThrow({
            where: {
                id
            }
       }) 
        const response = await prisma.user.update({
            where: {
                id
            },
            data: {
                email: email ? email : user.email,
                name: name? name : user.name,
                username: username? username : user.username,
                number:number ? number : user.username,
                birthday: birthday? birthday : user.birthday,
                password: password? password: user.password             
            }
        })
        
        return {
            id: response.id,
            email: response.email,
            name: response.name,
            username: response.username,
            number: response.number,
            birthday: response.birthday,
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