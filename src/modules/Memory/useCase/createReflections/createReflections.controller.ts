import { Request, Response } from "express";
import { createReflectionsUseCase } from "./createReflections.usecase";
import { ReflectionsRepository } from "../../repositories/implementations/Reflections.repository";

export class CreateReflectionsController {
    async handle (req: Request, res: Response): Promise<Response> {
        const createReflections = new createReflectionsUseCase(new ReflectionsRepository)
        
        const { memoryId, content } = req.body
        
        const response = await createReflections.execute({ memoryId, content })
        
        return res.json(response)
    }
}