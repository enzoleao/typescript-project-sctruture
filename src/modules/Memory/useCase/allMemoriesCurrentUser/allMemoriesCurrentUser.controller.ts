import { Request, Response } from "express";
import { AppError } from "../../../../err/AppError";
import { MemoryRepository } from "../../repositories/implementations/Memory.repository";
import { GettAllMemoriesCurrentUserUseCase } from "./allMemoriesCurrentUser.usecase";

export class AllMemoriesCurrentUserController {
    async handle( req: Request, res: Response ): Promise<Response> {
        const getMemoriesCurrentUser = new GettAllMemoriesCurrentUserUseCase(new MemoryRepository)
        const { authorization } = req.headers
        
        const token = authorization?.split(' ')[1]

        if (!token) {
            throw new AppError("Token missing.");
        }
        const base64Token = token.split('.')[1];
        const payload = Buffer.from(String(base64Token), 'base64').toString();
        const id = JSON.parse(payload).sub;

        const getAllMemories = await getMemoriesCurrentUser.execute(id)
        
        return res.json(getAllMemories)

    }
}