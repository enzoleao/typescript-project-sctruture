

export interface IAddPeopleInMemoryRepository {
    create(data: any): Promise<any | null>
    delete(data: any): Promise<any | null>
}