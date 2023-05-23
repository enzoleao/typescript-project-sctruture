import { ILocationRepository } from "../../repositories/Location.repository";

export class GetLocationUseCase {
    constructor(private locationRepository: ILocationRepository){}
    async execute(location: any):Promise<any> {
        const response = await this.locationRepository.findList(location)
        return response
    }
}