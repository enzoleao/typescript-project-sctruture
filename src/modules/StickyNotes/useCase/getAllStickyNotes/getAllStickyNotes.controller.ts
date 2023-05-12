import { Request, Response } from "express";
import { GetAllStickyNotesUseCase } from "./getAllStickyNotes.usecase";
import { StickyNotesRespository } from "../../repositories/implementations/StickyNotes.repository";

export class GetAllStickyNotesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createStickyNotes = new GetAllStickyNotesUseCase(new StickyNotesRespository)
    
        return res.json(createStickyNotes)
    }
}