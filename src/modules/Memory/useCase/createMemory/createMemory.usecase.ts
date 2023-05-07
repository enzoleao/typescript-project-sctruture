import { MemoryCreateDTO } from "../../dtos/MemoryCreateDTO";
import { memoryUserResponseDTO } from "../../dtos/MemoryUserRequestDTO";
import { IMemoryRepository } from "../../repositories/Memory.repository";
import { AddPeopleInMemoryUseCase } from "../addPeoplesInMemory/addPeopleInMemory.usecase";
import { CreateMemoryMediaUseCase } from "../createMemoryMedia/createMemoryMedia.usecase";

export class CreateMemoryUseCase {
    constructor(
        private memoryRepository: IMemoryRepository,
        private createMemoryMediaUseCase: CreateMemoryMediaUseCase,
        private addPeopleInMemoryUseCase: AddPeopleInMemoryUseCase,
    ){}

    async execute({
        authorId,
        name,
        medias,
        usersInMemory
    }: any): Promise<memoryUserResponseDTO> {
        const createNewMemory = await this.memoryRepository.create({
            authorId,
            name,  
        })
        
        if (medias) {         
           await this.createMemoryMediaUseCase.execute({
                memory_id: createNewMemory.id,
                medias
            })
        }
        if (usersInMemory) {
        
            await this.addPeopleInMemoryUseCase.execute({
                memoryId: createNewMemory.id,
                userId: usersInMemory
            })
        }
        
        
        return createNewMemory
    }
}