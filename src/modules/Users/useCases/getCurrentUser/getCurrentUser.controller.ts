import { Request, Response } from "express"
import { AppError } from "../../../../err/AppError"
import { UserRepository } from "../../repositories/implementations/User.repository"
import { GetCurrentUseCase } from "./getCurrentUser.usecase"
import { getIdFromToken } from "../../../../service/getIdFromToken"

export class GetCurrentUserController { 
    async handle(req: Request, res: Response): Promise<Response> {
        const getCurrentUserUseCase = new GetCurrentUseCase(new UserRepository)
        
        const { authorization } = req.headers


        
        if (!authorization) {
            throw new AppError("Token missingg")
        }
        
        const userId = await getIdFromToken(authorization)
  
        const userResponse = await getCurrentUserUseCase.execute(userId)

        return res.json(userResponse)
    }
}