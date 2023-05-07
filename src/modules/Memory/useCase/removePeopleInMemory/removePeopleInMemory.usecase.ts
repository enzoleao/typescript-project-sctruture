import { IAddPeopleInMemoryRepository } from "../../repositories/AddPeopleInMemory.repository"

export class RemovePeopleInMemoryUseCase {
    constructor(
        private removePeopleInMemory : IAddPeopleInMemoryRepository){}

    async execute({ memoryId, userId }: any):Promise<any> {
        
        const response = this.removePeopleInMemory.delete({ memoryId, userId })

        return response
    }
}