import { ILocationRepository } from "../../repositories/Location.repository";

export class CreateLocationUseCase {
    constructor(private locationRepository: ILocationRepository){}
    async execute({location, memoryId}: any):Promise<any>{
        
        const response = this.locationRepository.create({location, memoryId})
        return response
    }
}