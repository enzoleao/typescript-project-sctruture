import { Medias, Prisma } from "@prisma/client";
import { prisma } from "../../../../prisma";
import { MemoryCreateMediaDTO } from '../../dtos/MemoryCreateMediaDTO'
import { IMemoryMediaRepository } from '../MemoryMedia.repository'
import fs from 'fs'
export class CreateMemoryMedia implements IMemoryMediaRepository {
    
    async create(data:MemoryCreateMediaDTO): Promise<any | null> {
        const createdRecord =  await prisma.medias.createMany({
            data: data.medias.map((i: any) => {            
                return {
                    memoryId: parseInt(data.memoryId),
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

        const uniqueMemory = memoryId.length <= 1 ? memoryId.split("") : memoryId
        const memoryIdsNumber = uniqueMemory.map(Number)
        const memoriesName = await prisma.medias.findMany({
            where:{
                id:{
                    in: memoryIdsNumber
                }
            }
        })
        memoriesName.map((i)=>{
            fs.unlink(`./public/${i.src}`, (err) => {})
        })
        const deletedRecords = await prisma.medias.deleteMany({
            where:{
                id:{
                    in: memoryIdsNumber
                }
            }
        })
        return {
            medias: memoryIdsNumber,
            mediasDeleteSucess: deletedRecords.count,
            message:"Imagens deletadas com sucesso"
        }
    }
}