import { UpdateStickyNotesDTO } from "../../dtos/updateStickyNotesDTO";
import { IStickyNotesRepository } from "../../repositories/StickNotes.respository";

export class UpdateStickyNotesUseCase {
    constructor(private stickyNotesRepository: IStickyNotesRepository){}

    async execute({ date, content, stickyNotesId }: UpdateStickyNotesDTO):Promise<any> {

        const response = await this.stickyNotesRepository.update({ date, content, stickyNotesId })
        return response
    }
}