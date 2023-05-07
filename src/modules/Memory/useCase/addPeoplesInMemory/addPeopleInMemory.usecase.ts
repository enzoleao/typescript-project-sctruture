import { IAddPeopleInMemoryRepository } from "../../repositories/AddPeopleInMemory.repository"

export class AddPeopleInMemoryUseCase {
    constructor(
        private addPeopleInMemory : IAddPeopleInMemoryRepository){}

    async execute({ memoryId, userId }: any):Promise<any> {
        
        const response = this.addPeopleInMemory.create({memoryId, userId})

        return response
    }
}