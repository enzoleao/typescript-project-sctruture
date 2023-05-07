import { AppError } from "../../../../err/AppError";
import { updateUserResponseDTO } from "../../dtos/updateUserResponseDTO";
import { IUserRepository } from "../../repositories/User.repository";


interface UpdateUserTypes {
    id: number,
    name: string
    avatar?: string
}
export class UpdateUserUseCase {
    constructor(private userRepository: IUserRepository){}

    async execute({ avatar, name, id}: UpdateUserTypes): Promise<updateUserResponseDTO | null> {

        try {
            const user = await this.userRepository.findById(id)
            
            const response = await this.userRepository.update({ avatar, name, id }) 
            return response
        }
        catch {
            throw new AppError("User not found", 404)
        }


        
    }
}