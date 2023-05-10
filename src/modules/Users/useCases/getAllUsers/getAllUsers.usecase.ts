import { IUserRepository } from "../../repositories/User.repository";

export class GetAllUsersUseCase {
    constructor(
        private userRepository: IUserRepository){}

        async execute(): Promise<any | null> {
            
            const allUsers = await this.userRepository.findAll()

            return allUsers
        }
}