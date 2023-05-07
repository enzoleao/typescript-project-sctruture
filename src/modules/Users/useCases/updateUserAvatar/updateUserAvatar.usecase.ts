import { AppError } from "../../../../err/AppError";
import { IUserRepository } from "../../repositories/User.repository";
import fs from 'fs'

export class UpdateUserAvatarUseCase {
    constructor(private userRepository: IUserRepository){}

    async execute({ avatar, userId }: any): Promise<any | null> {
            const responseUser = await this.userRepository.findById(userId)
            if (!responseUser) {
                throw new AppError("User not found", 404)
            }
            if (responseUser.avatar) {
                const imageResponse = responseUser.avatar.split("/")
                const imageName = imageResponse[imageResponse.length - 1]
                fs.unlink(`./public/${imageName}`, (err) => {})

            }
            const response = await this.userRepository.updateUserAvatar({ avatar, userId }) 
            return response
        
    }
}