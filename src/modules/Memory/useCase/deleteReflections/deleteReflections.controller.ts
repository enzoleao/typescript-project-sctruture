import { Request, Response } from "express";
import { DeleteReflectionsUseCase } from "./deleteReflections.usecase";
import { ReflectionsRepository } from "../../repositories/implementations/Reflections.repository";

export class DeleteReflectionsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const deleteReflections = new DeleteReflectionsUseCase(new ReflectionsRepository)
        
        const { reflectionId } = req.params
        
        const response = await deleteReflections.execute({ reflectionId })
        return res.json(response)
    }
}