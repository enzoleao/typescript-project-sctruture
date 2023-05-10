import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./getAllUsers.usecase";
import { UserRepository } from "../../repositories/implementations/User.repository";

export class GetAllUsersController {
    async handle(req: Request, res: Response): Promise<Response> {
        
        const getAllUsersUseCase = new GetAllUsersUseCase(new UserRepository)
        const allUsers = await getAllUsersUseCase.execute()

        return res.json(allUsers)
    }
}