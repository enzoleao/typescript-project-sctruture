import { Request, Response } from "express";
import { UserRepository } from "../../repositories/implementations/User.repository";
import { DeleteUserUseCase } from "./deleteUser.usecase";

export class DeleteUserController {
    
    async handle(req: Request, res: Response):Promise<Response | null> {
        const deleteUserUseCase = new DeleteUserUseCase(new UserRepository)
        const { id } = req.params
        
        const response = await deleteUserUseCase.execute(id)

        return res.json(response)
    }

    
}