import { hash } from "bcrypt";
import { IUserRepository } from "../../repositories/User.repository";
import { AppError } from "../../../../err/AppError";

export class UpdateUserUseCase {
    constructor(private userRepository: IUserRepository){}

    async execute({id, email, name, username, number, birthday, password}:any):Promise<any | null> {
        const user = await this.userRepository.findById(id)

        const hasChangePassword = password ? await hash(password, 8) : undefined 
        const response = await this.userRepository.updateUser({id, email, name, username, number, birthday, password: hasChangePassword})
        return response
    }
}