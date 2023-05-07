import { MemoryCreateDTO } from "../dtos/MemoryCreateDTO";
import { memoryUserResponseDTO } from "../dtos/MemoryUserRequestDTO";

export interface IMemoryRepository {
    findList(id: number): Promise<memoryUserResponseDTO | null>
    create(memory: MemoryCreateDTO): Promise<any | null>
    delete(memoryId: any): Promise<any | null>
}