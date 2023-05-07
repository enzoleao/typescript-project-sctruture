import { AppError } from "../../../../err/AppError";
import { memoryUserResponseDTO } from "../../dtos/MemoryUserResponseDTO"
import { IMemoryRepository } from '../../repositories/Memory.repository'

export class GettAllMemoriesCurrentUserUseCase {
    constructor(
        private userRepository: IMemoryRepository) {}

    async execute(user_id: number): Promise<any | null> {
        const memories = await this.userRepository.findList(user_id);

        if (!memories) {
            throw new AppError("User not have memories")
        }
        return memories
    }
}