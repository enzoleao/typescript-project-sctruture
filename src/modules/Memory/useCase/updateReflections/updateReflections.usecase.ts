import { IReflectionsRepository } from "../../repositories/Reflections.repository";

export class UpdateReflectionsUseCase {
    constructor(private reflectionsRepository: IReflectionsRepository){}
    async execute({reflectionId, content}: any): Promise<any>{
        const response = await this.reflectionsRepository.update({ reflectionId, content })
        return response
    }
}