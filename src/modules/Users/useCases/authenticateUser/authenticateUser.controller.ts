import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./authenticateUser.usecase";
import { UserRepository } from "../../repositories/implementations/User.repository";


export class AuthenticateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const authenticateUserUseCase = new AuthenticateUserUseCase(new UserRepository)

        const { email, password } = req.body
        const response = await authenticateUserUseCase.execute({ password, email })
        
        return res.json(response)
    }
}