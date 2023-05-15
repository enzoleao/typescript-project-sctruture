import { Request, Response } from "express";
import { AddPeopleInMemoryUseCase } from "./addPeopleInMemory.usecase";
import { AddPeopleInMemoryRepository } from "../../repositories/implementations/AddPeopleInMemory.repository";

export class addPeopleInMemoryController {
    async handle (req: Request, res: Response): Promise<Response> {
        const addPeopleInMemory = new AddPeopleInMemoryUseCase(new AddPeopleInMemoryRepository)

        const { memoryId, usersInMemory } = req.body
        
        const response = await addPeopleInMemory.execute({ memoryId, usersInMemory })
        return res.json(response)
    }
}