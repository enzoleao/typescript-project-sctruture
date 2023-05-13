import { IMemoryRepository } from "../../repositories/Memory.repository";

export class FindAllMemoriesUseCase {
    constructor(private MemoryRepository: IMemoryRepository){}
    async execute():Promise<any | null> {
        
        const response = this.MemoryRepository.findAll()
        return response
    }
}