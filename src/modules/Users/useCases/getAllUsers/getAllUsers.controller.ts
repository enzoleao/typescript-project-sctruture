import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./getAllUsers.usecase";
import { UserRepository } from "../../repositories/implementations/User.repository";
import { FindUsersByInitialsUseCase } from "../findUsersByInitials/findUsersByInitials.usecase";

export class GetAllUsersController {
    async handle(req: Request, res: Response): Promise<Response> {
        
        const getAllUsersUseCase = new GetAllUsersUseCase(new UserRepository)
        const findUsersByInitials = new FindUsersByInitialsUseCase(new UserRepository)

        if (req.query.userInitials) {
            const response = await findUsersByInitials.execute(req.query.userInitials)
            return res.json(response)
        }
        const allUsers = await getAllUsersUseCase.execute()

        return res.json(allUsers)
    }
}