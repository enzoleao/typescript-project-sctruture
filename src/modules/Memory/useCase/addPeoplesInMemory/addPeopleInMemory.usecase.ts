import { IAddPeopleInMemoryRepository } from "../../repositories/AddPeopleInMemory.repository"

export class AddPeopleInMemoryUseCase {
    constructor(
        private addPeopleInMemory : IAddPeopleInMemoryRepository){}

    async execute({ memoryId, usersInMemory }: any):Promise<any> {
        
        const response = this.addPeopleInMemory.create({memoryId, usersInMemory})

        return response
    }
}