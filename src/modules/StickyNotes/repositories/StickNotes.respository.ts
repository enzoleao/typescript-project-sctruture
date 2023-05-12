import { CreateStickyNotesDTO } from "../dtos/createStickyNotesDTO"
import { UpdateStickyNotesDTO } from "../dtos/updateStickyNotesDTO"

export interface IStickyNotesRepository {
    findAll(userId : string): Promise< any | null>
    create({ content, date, authorId }:  CreateStickyNotesDTO): Promise<any | null>
    update({stickyNotesId, content, date }: UpdateStickyNotesDTO): Promise<any | null>
    delete(stickyNotesId: string): Promise<any | null>
}