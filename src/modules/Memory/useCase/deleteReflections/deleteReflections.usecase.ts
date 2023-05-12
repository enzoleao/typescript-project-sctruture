import { IReflectionsRepository } from "../../repositories/Reflections.repository";

export class DeleteReflectionsUseCase {
    constructor(private reflectionsRepository: IReflectionsRepository){}
    async execute({ reflectionId }: any):Promise<any> {
        const response = await this.reflectionsRepository.delete({ reflectionId })
        return response
    }
}