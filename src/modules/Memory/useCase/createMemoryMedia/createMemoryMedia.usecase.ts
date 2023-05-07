import { IMemoryMediaRepository } from '../../repositories/MemoryMedia.repository'

export class CreateMemoryMediaUseCase {

    constructor( private memoryRepository: IMemoryMediaRepository){}

    async execute({ memoryId, medias }: any): Promise<any> {
        const response = await this.memoryRepository.create({ memoryId, medias })
        return response
    }
}