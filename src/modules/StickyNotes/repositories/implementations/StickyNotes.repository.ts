import { CreateStickyNotesDTO } from "../../dtos/createStickyNotesDTO";
import { UpdateStickyNotesDTO } from "../../dtos/updateStickyNotesDTO";
import { IStickyNotesRepository } from "../StickNotes.respository";

export class StickyNotesRespository implements IStickyNotesRepository {
    findAll(authorId: string): Promise<null> {
        throw new Error("Method not implemented.");
    }
    create({authorId, content, date}: CreateStickyNotesDTO): Promise<any> {
        throw new Error("Method not implemented.");
    }
    update({content, stickyNotesId, date}: UpdateStickyNotesDTO): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(memoryId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}