import { IStickyNotesRepository } from "../../repositories/StickNotes.respository";

export class CreateStickyNotesUseCase {
    constructor(private StickyNotesRepository: IStickyNotesRepository){}

    async execute({authorId, date, content}: any):Promise<any>{
        const response = await this.StickyNotesRepository.create({
            authorId, date, content
        })
        return response
    }
}