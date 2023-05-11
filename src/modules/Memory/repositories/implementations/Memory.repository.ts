import { prisma } from "../../../../prisma";
import { Memory } from "@prisma/client"
import { IMemoryRepository } from '../Memory.repository'
import { memoryUserResponseDTO } from "../../dtos/MemoryUserRequestDTO";
import { MemoryCreateDTO } from "../../dtos/MemoryCreateDTO";


export class MemoryRepository implements IMemoryRepository {
    async create(memory: MemoryCreateDTO): Promise<any> {

        const response = await prisma.memory.create({
            data: {
                authorId: memory.authorId,
                name: memory.name,
            }
        })
        return response

    }
    async findList(id: string): Promise<any | null> { 
        const response = await prisma.memory.findMany({
            where: {
                authorId: id
            },
            include: {
                author: true,
                memoryParticipants: true,
                media: true,
                location: true,
                reflections: true,
            }
        })
        return await Promise.all (response.map  (async (i: any)=>{
            const response = await prisma.usersInMemories.findMany({
                where: {
                    memoryId:i.id
                },
                include:{ 
                    user: true,
                }
            })
            return {
                id: i.id,
                name: i.name,
                usersInMemory: response.map((i: any)=>{
                    return{ 
                    id: i.user.id,
                    name: i.user.name,
                    avatar: `${process.env.PROTOCOL}://${process.env.HOST}/${i.user.avatar}`,
                    email:i.user.email,
                }
                }),
                reflections: i.reflections.map((i: any)=>{
                    return {
                        id: i.id,
                        content: i.content,
                        createdAt: i.createdAt
                    }
                }),
                media: i.media.map((i: any)=>{
                    return {
                        id: i.id,
                        src: `${process.env.PROTOCOL}://${process.env.HOST}/${i.src}`
                    }
                }),
                location: i.location,
                createdAt: i.createdAt,
                
            }
        }))
    }
    async delete({ memoryId }: any): Promise<any> {

        const response = await prisma.memory.delete({
            where: {
                id: memoryId
            }
        })
        return response
    }
    async update(memoryId: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
}