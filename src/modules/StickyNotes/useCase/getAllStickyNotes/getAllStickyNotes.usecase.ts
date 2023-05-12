import { IStickyNotesRepository } from "../../repositories/StickNotes.respository";

export class GetAllStickyNotesUseCase {
    constructor(private stickyNotesRepository: IStickyNotesRepository){}

    async execute(userId: string): Promise<any | null> {
        const response = this.stickyNotesRepository.findAll(userId)
        return response
    }
}