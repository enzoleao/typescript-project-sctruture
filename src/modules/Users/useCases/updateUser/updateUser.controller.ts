import { Request, Response } from "express";
import { UpdateUserUseCase } from "./updateUser.usecase";
import { UserRepository } from "../../repositories/implementations/User.repository";
import { getIdFromToken } from "../../../../service/getIdFromToken";
import { AppError } from "../../../../err/AppError";

export class UpdateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const updateUserUseCase = new UpdateUserUseCase(new UserRepository)

        const { id } = req.params
        const { authorization } = req.headers
        const { email, name, username, number, birthday, password } = req.body
        const idVerify = await getIdFromToken(authorization)
        if (idVerify !== id) {
            throw new AppError('Token não autorizado')
        }
        const response = await updateUserUseCase.execute({id,email, name, username, number, birthday, password })
        return res.json(response)
    }
}