import { Request, Response } from "express";
import { DeleteMemoryMediaUseCase } from "./deleteMediasMemory.usecase";
import { CreateMemoryMedia } from "../../repositories/implementations/MemoryMedia.repository";

export class DeleteMemoryMediaController {
    async handle (req: Request, res: Response): Promise<Response> {
        const deleteMemoryMedia = new DeleteMemoryMediaUseCase(new CreateMemoryMedia)
        
        const { memoryId } = req.params
        
        const response = await deleteMemoryMedia.execute({ memoryId })
        return res.json(response)
    }
}