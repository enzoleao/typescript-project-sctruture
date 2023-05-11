import { Reflections } from '@prisma/client'
import { IReflectionsRepository } from '../Reflections.repository'
import { prisma } from '../../../../prisma'

export class ReflectionsRepository implements IReflectionsRepository {
    async create({memoryId, content}: any): Promise<any> {
       
        const response = await prisma.reflections.create({
            data: {
                content: content,
                memoryId: memoryId
            }
        })
        return response
    }
    update(data: any): Promise<any> {
        throw new Error('Method not implemented.')
    }
    delete({ memoryMedia_id }: any): Promise<any> {
        throw new Error('Method not implemented.')
    }

}