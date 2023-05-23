import { Request, Response } from "express";
import { GetLocationUseCase } from "./getLocation.usecase";
import { LocationRepository } from "../../repositories/implementations/Location.repository";

export class GetLocationController {
    async handle(req: Request, res: Response):Promise<Response> {
        const getLocationUseCase = new GetLocationUseCase(new LocationRepository)
        
        const { location } = req.query
        const response = await getLocationUseCase.execute(location)
        return res.json(response)
    }
}