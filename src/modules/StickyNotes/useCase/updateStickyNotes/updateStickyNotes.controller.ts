import { Request, Response } from "express";
import { UpdateStickyNotesUseCase } from "./updateStickyNotes.usecase";
import { StickyNotesRespository } from "../../repositories/implementations/StickyNotes.repository";

export class UpdateStickyNotesController {
    async handle(req: Request, res: Response):Promise<Response> {
        const updateStickyNotesUseCase = new UpdateStickyNotesUseCase(new StickyNotesRespository)
        
        const { stickyNotesId } = req.params
        const { content, date } = req.body
        const response = await updateStickyNotesUseCase.execute({stickyNotesId, content, date})
        
        return res.json(response)
    }
}