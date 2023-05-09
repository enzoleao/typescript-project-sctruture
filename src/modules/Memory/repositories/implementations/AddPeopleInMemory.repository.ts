import { UsersInMemories, Prisma } from "@prisma/client";
import { prisma } from "../../../../prisma";
import { IAddPeopleInMemoryRepository } from "../AddPeopleInMemory.repository";
import { AddPeopleInMemoryDTO } from "../../dtos/AddPeopleInMemoryDTO";
import { AppError } from "../../../../err/AppError";

export class AddPeopleInMemoryRepository implements IAddPeopleInMemoryRepository {
    
    async create({ usersInMemory, memoryId }:AddPeopleInMemoryDTO): Promise<any | null> { 
        console.log(usersInMemory)
        const response =  await prisma.usersInMemories.createMany({
             data: usersInMemory.map((i: any) => {            
                 return {
                     memoryId: memoryId,
                     userId: i,
                 }
            })
        })
        return {
            id: memoryId,
            usersAddInMemory: response.count,
        }
    }
    async delete({ userId, memoryId }: any): Promise<any> {
        try {

            const response = await prisma.usersInMemories.deleteMany({
                where:{
                    userId: userId,
                    memoryId: memoryId
                }
            })

            if (response.count == 0) {
                throw new AppError("Usuário ou memória não encontrada", 404)
            }
            return {
                userRemoved: userId
            }
        }
        catch {
            throw new AppError("Ocorreu algum erro", 400)
        }
    }
}