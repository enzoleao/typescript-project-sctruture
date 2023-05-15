import { Request, Response } from "express";
import { CreateStickyNotesUseCase } from "./createStickyNotes.usecase";
import { StickyNotesRespository } from "../../repositories/implementations/StickyNotes.repository";
import { getIdFromToken } from "../../../../service/getIdFromToken";

export class CreateStickyNotesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createStickyNotesUseCase = new CreateStickyNotesUseCase(new StickyNotesRespository)

        const { content, date } = req.body
        const authorId = await getIdFromToken(req.headers.authorization)
        const response = await createStickyNotesUseCase.execute({authorId, content, date})
        
        return res.json(response)
    }
}