import { Request, Response } from "express";
import { DeleteStickyNotesUseCase } from "./deleteStickyNotes.usecase";
import { StickyNotesRespository } from "../../repositories/implementations/StickyNotes.repository";

export class DeleteStickyNotesController {
    async handle(req: Request, res: Response):Promise<Response> {
        const deleteStickyNotesUseCase = new DeleteStickyNotesUseCase(new StickyNotesRespository)

        const { stickyNotesId } = req.params
        const response = await deleteStickyNotesUseCase.execute(stickyNotesId)
        return res.json(response)
    }
}