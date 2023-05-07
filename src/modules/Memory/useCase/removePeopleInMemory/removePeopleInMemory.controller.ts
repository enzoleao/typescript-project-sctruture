import { Request, Response } from "express";
import { RemovePeopleInMemoryUseCase } from "./removePeopleInMemory.usecase";
import { AddPeopleInMemoryRepository } from "../../repositories/implementations/AddPeopleInMemory.repository";

export class RemovePeopleInMemoryController {
    async handle (req: Request, res: Response): Promise<Response> {
        const addPeopleInMemory = new RemovePeopleInMemoryUseCase(new AddPeopleInMemoryRepository)

        const { memoryId, userId } = req.query

        const response = await addPeopleInMemory.execute({ memoryId, userId })
        return res.json(response)
    }
}