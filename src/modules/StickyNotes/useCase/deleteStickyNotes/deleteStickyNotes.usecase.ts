import { IStickyNotesRepository } from "../../repositories/StickNotes.respository";

export class DeleteStickyNotesUseCase {
    constructor(private StickyNotesRepository: IStickyNotesRepository){}

    async execute(stickyNotesId: string):Promise<any>{
        const response = await this.StickyNotesRepository.delete(stickyNotesId)
        return response
    }
}