import { Request, Response } from "express";
import { CreateLocationUseCase } from "./createLocation.usecase";
import { LocationRepository } from "../../repositories/implementations/Location.repository";

export class CreateLocationController {
    async handle(req: Request, res: Response):Promise<Response> {
        const createLocationUseCase = new CreateLocationUseCase(new LocationRepository)

        const { location, memoryId } = req.body
        const response = createLocationUseCase.execute({location, memoryId})
        return res.json(response)
    }
}