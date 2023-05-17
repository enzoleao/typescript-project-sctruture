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
    async update({ content, stickyNotesId, date }: UpdateStickyNotesDTO): Promise<any> {
        const response = await prisma.stickyNotes.update({
            where: {
                id: stickyNotesId
            },
            data: {
                content,
                date
            }
        })
        return response
    }
    async delete(stickyNotesId: string): Promise<any> {
        const response = await prisma.stickyNotes.delete({
            where: {
                id:stickyNotesId
            }
        })
        return response
    }
    
}