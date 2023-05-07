import { IMemoryMediaRepository } from '../../repositories/MemoryMedia.repository'

export class DeleteMemoryMediaUseCase {

    constructor( private memoryRepository: IMemoryMediaRepository){}

    async execute({ memoryId }: any): Promise<any> {

        const response = await this.memoryRepository.delete({ memoryId })
        return response
    }
}