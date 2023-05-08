import { IMemoryRepository } from '../../repositories/Memory.repository'

export class DeleteMemoryMediaUseCase {

    constructor( private memoryRepository: IMemoryRepository){}

    async execute( memoryId : any): Promise<any> {
        const response = await this.memoryRepository.delete( memoryId )
        return response
    }
}