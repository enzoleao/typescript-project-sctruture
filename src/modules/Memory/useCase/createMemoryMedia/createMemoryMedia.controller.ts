import { Request, Response } from "express";
import { CreateMemoryMediaUseCase } from "./createMemoryMedia.usecase";
import { CreateMemoryMedia } from "../../repositories/implementations/MemoryMedia.repository";

export class CreateMemoryMediaController {
    async handle (req: Request, res: Response): Promise<Response> {
        const createeMemoryMedia = new CreateMemoryMediaUseCase(new CreateMemoryMedia)
        
        const medias = req.files
        const { memoryId } = req.body
        const response = await createeMemoryMedia.execute({memoryId, medias})
        return res.json(response)
    }
}