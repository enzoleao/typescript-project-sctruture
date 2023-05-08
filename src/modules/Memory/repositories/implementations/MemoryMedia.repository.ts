
import { prisma } from "../../../../prisma";
import { MemoryCreateMediaDTO } from '../../dtos/MemoryCreateMediaDTO'
import { IMemoryMediaRepository } from '../MemoryMedia.repository'
import fs from 'fs'
export class CreateMemoryMedia implements IMemoryMediaRepository {
    
    async create(data:MemoryCreateMediaDTO): Promise<any | null> {
        const createdRecord =  await prisma.medias.createMany({
            data: data.medias.map((i: any) => {            
                return {
                    memoryId: data.memoryId,
                    src: i.filename,
                }
            })
        })        
        return {
            imagesUploadeds: createdRecord.count,
            message:"Imagens subidas com sucesso"
        }
    }
    async delete({ memoryId }: any): Promise<any> {

        
        const memoriesName = await prisma.medias.findUnique({
            where:{
                id: memoryId
            }
        })
        
            fs.unlink(`./public/${memoriesName?.src}`, (err) => {})
        
        const deletedRecords = await prisma.medias.deleteMany({
            where:{
                id: memoryId
            }
        })
        return {
            medias: memoryId,
            message:"Imagem deletada com sucesso"
        }
    }
}