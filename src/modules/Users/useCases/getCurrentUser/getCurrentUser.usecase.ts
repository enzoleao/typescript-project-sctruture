import { AppError } from "../../../../err/AppError";
import { userResponseDTO } from "../../dtos/userResponseDTO";
import { IUserRepository } from "../../repositories/User.repository";


export class GetCurrentUseCase {
    constructor(
        private userRepository: IUserRepository) {}

    async execute(userId: string): Promise<userResponseDTO | null> {

        
       const employee = await this.userRepository.findById(userId)
       if (!employee) {
            throw new AppError("Employee not found")
       }

       return employee
    }
}