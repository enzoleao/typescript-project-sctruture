import { IUserRepository } from "../../repositories/User.repository";


export class DeleteUserUseCase {
    constructor(private userRepository: IUserRepository){}

    async execute(id: string):Promise<any | null> {
        const response = await this.userRepository.delete(id)
        return response
    }
}