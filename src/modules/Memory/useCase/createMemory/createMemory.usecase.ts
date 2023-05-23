import { CreateLocationUseCase } from "../../../Location/useCase/createLocation/createLocation.usecase";
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
        private createMemoryLocationUseCase: CreateLocationUseCase,
    ){}

    async execute({
        authorId,
        name,
        medias,
        usersInMemory,
        location
    }: any): Promise<memoryUserResponseDTO | any> {
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
                usersInMemory
            })
        }
        if (location) {
            await this.createMemoryLocationUseCase.execute({
                memoryId: createNewMemory.id,
                location: location
            })
        }
        
        
        return createNewMemory
    }
}