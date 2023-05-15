import { prisma } from "../../../../prisma";
import { StickyNotes } from "@prisma/client";
import { CreateStickyNotesDTO } from "../../dtos/createStickyNotesDTO";
import { UpdateStickyNotesDTO } from "../../dtos/updateStickyNotesDTO";
import { IStickyNotesRepository } from "../StickNotes.respository";

export class StickyNotesRespository implements IStickyNotesRepository {
    async findAll(authorId: string): Promise<any> {

        const response = await prisma.stickyNotes.findMany({
            where: {
                authorId
            }
        })
        return response
    }
    async create({authorId, content, date}: CreateStickyNotesDTO): Promise<any> {

        const response = await prisma.stickyNotes.create({
            data:{
                authorId,
                content,
                date
            }
        })
        return response
    }
    async update({content, stickyNotesId, date}: UpdateStickyNotesDTO): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async delete(memoryId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}