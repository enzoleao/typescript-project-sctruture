import { Medias, Prisma } from "@prisma/client";
import { MemoryCreateMediaDTO } from '../dtos/MemoryCreateMediaDTO'

export interface IMemoryMediaRepository {
    create(data: any): Promise<any | null>
    delete({ memoryMedia_id }: any): Promise<any | null>
}