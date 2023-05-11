import { IReflectionsRepository } from "../../repositories/Reflections.repository";

export class createReflectionsUseCase {
    constructor(private ReflectionsRepository: IReflectionsRepository){}

    async execute ({ memoryId, content }: any): Promise<any> {

        const response = await this.ReflectionsRepository.create({ memoryId, content })
        return response
    }
}