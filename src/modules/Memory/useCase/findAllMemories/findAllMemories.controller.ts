import { Request, Response } from "express";
import { FindAllMemoriesUseCase } from "./findAllMemories.usecase";
import { MemoryRepository } from "../../repositories/implementations/Memory.repository";

export class FindAllMemoriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const memoryRepository = new FindAllMemoriesUseCase(new MemoryRepository)

        const response = await memoryRepository.execute()
        return res.json(response)
    }
}