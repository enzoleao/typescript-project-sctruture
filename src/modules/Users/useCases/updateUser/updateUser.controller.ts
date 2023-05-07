import { Request, Response } from "express";
import { UpdateUserUseCase } from "./updateUser.usecase";
import { UserRepository } from "../../repositories/implementations/User.repository";
import { getIdFromToken } from "../../../../service/getIdFromToken";

export class UpdateUserController {
    async handle (req: Request, res: Response ): Promise<Response> {

        const updateUser = new UpdateUserUseCase(new UserRepository)
        const id = await getIdFromToken(req.headers.authorization)
        const avatar = req.file?.filename
        const { name } = req.body

        const response = await updateUser.execute({
            id, name, avatar
        })
        return res.json(response)
    }
}