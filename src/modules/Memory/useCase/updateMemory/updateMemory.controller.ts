import { Request, Response } from "express";
import { UpdateMemoryUseCase } from "./updateMemory.usecase";
import { MemoryRepository } from "../../repositories/implementations/Memory.repository";

export class UpdateMemoryController {
    async handle (req: Request, res: Response): Promise<Response> {
        const updateMemory = new UpdateMemoryUseCase(new MemoryRepository)

        const { memoryName } = req.body
        const { memoryId } = req.params

        const response = await updateMemory.execute({memoryName, memoryId})

        return res.json(response)
    }
}