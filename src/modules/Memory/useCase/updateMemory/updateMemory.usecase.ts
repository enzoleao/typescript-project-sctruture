import { IMemoryRepository } from "../../repositories/Memory.repository";

export class UpdateMemoryUseCase {
    constructor( private memoryRepository: IMemoryRepository){}

    async execute({ memoryId, memoryName, }: any): Promise<any> {
        const memoryUpdate = await this.memoryRepository.update({
            memoryId,
            memoryName
        })

        return memoryUpdate
    }
}