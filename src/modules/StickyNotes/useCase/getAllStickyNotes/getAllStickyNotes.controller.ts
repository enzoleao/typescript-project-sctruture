import { Request, Response } from "express";
import { GetAllStickyNotesUseCase } from "./getAllStickyNotes.usecase";
import { StickyNotesRespository } from "../../repositories/implementations/StickyNotes.repository";
import { getIdFromToken } from "../../../../service/getIdFromToken";

export class GetAllStickyNotesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createStickyNotes = new GetAllStickyNotesUseCase(new StickyNotesRespository)
        
        const userId = await getIdFromToken(req.headers.authorization)
        const respnse = await createStickyNotes.execute(userId)
        return res.json(respnse)
    }
}