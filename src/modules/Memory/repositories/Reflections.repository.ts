
export interface IReflectionsRepository {
    create(data: any): Promise<any | null>
    update(data: any): Promise<any | null>
    delete({ memoryMedia_id }: any): Promise<any | null>
}