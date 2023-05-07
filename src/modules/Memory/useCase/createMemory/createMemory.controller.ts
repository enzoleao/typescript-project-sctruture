import { Request, Response } from "express";
import { CreateMemoryUseCase } from "./createMemory.usecase";
import { MemoryRepository } from "../../repositories/implementations/Memory.repository";
import { CreateMemoryMedia } from '../../repositories/implementations/MemoryMedia.repository'
import { getIdFromToken } from "../../../../service/getIdFromToken";
import { AppError } from "../../../../err/AppError";
import { CreateMemoryMediaUseCase } from "../createMemoryMedia/createMemoryMedia.usecase";
import { AddPeopleInMemoryUseCase } from "../addPeoplesInMemory/addPeopleInMemory.usecase";
import { AddPeopleInMemoryRepository } from "../../repositories/implementations/AddPeopleInMemory.repository";

export class CreateMemoryController {
    async handle( req: Request, res: Response ): Promise<Response> {
        const createNewMemory = new CreateMemoryUseCase(
            new MemoryRepository,
            new CreateMemoryMediaUseCase(new CreateMemoryMedia),
            new AddPeopleInMemoryUseCase(new AddPeopleInMemoryRepository)
            )

        const { name, usersInMemory } = req.body
        const { authorization } = req.headers
        const authorId = await getIdFromToken(authorization)
         
        const response = await createNewMemory.execute({
            authorId,
            name,
            usersInMemory
        })
        return res.json(response)

    }
}