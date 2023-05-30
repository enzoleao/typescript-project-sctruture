

export interface ILocationRepository {
    findList(id: string): Promise<any | null>
    create({location, memoryId}: any ): Promise<any | null>
}