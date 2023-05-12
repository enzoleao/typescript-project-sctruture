import { Request, Response } from "express";
import { UpdateReflectionsUseCase } from "./updateReflections.usecase";
import { ReflectionsRepository } from "../../repositories/implementations/Reflections.repository";

export class UpdateReflectionsController {
    async handle (req: Request, res: Response): Promise<Response> {
        const updateReflection = new UpdateReflectionsUseCase(new ReflectionsRepository)
        
        const { reflectionId } = req.params
        const { content } = req.body
        
        const response = await updateReflection.execute({ reflectionId, content})
        return res.json(response)
    }
}