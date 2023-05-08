import { Request, Response } from "express";
import { MemoryRepository } from "../../repositories/implementations/Memory.repository";
import { DeleteMemoryMediaUseCase } from "./deleteMemory.usecase";

export class DeleteMemoryController {
    async handle (req: Request, res: Response): Promise<Response> {
        const deleteMemoryMedia = new DeleteMemoryMediaUseCase(new MemoryRepository)
        
        const { memoryId } = req.params
        
        const response = await deleteMemoryMedia.execute({ memoryId })
        return res.json(response)
    }
}