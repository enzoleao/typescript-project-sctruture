import { UsersInMemories, Prisma } from "@prisma/client";
import { prisma } from "../../../../prisma";
import { IAddPeopleInMemoryRepository } from "../AddPeopleInMemory.repository";
import { AddPeopleInMemoryDTO } from "../../dtos/AddPeopleInMemoryDTO";

export class AddPeopleInMemoryRepository implements IAddPeopleInMemoryRepository {
    
    async create({ userId, memoryId }:AddPeopleInMemoryDTO): Promise<any | null> {
        
        const response =  await prisma.usersInMemories.createMany({
             data: userId.map((i: any) => {            
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
        const uniqueMemory =  userId.length <= 1 ? userId.split("") : userId

        const idsUsersNumber = uniqueMemory.map(Number)
        
        
        console.log(idsUsersNumber)
        const response = await prisma.usersInMemories.deleteMany({
            where:{
                userId: {
                    in: idsUsersNumber
                },
                memoryId: parseInt(memoryId)
            }
        })
        return {
            usersRemovedSucess: response.count
        }
    }
}