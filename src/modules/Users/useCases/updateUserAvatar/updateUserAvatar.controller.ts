import { AppError } from "../../../../err/AppError"
import { getIdFromToken } from "../../../../service/getIdFromToken"
import { UserRepository } from "../../repositories/implementations/User.repository"
import { UpdateUserAvatarUseCase } from "./updateUserAvatar.usecase"
import { Request, Response } from "express"

export class UpdateUserAvatarController {
    async handle (req: Request, res: Response ): Promise<Response> {

            const updateUserAvatar = new UpdateUserAvatarUseCase(new UserRepository)
            const avatar = req.file?.filename
            const { userId } = req.params
        if (!avatar) {
            throw new AppError("Image not receveid", 404)
        }
        const response = await updateUserAvatar.execute({
            userId, avatar
        })
        return res.json(response)
    }
}