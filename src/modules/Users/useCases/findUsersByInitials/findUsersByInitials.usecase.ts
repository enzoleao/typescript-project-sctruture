import { IUserRepository } from "../../repositories/User.repository";

export class FindUsersByInitialsUseCase {
    constructor(private findUsersByInitialsRepository: IUserRepository){}
    async execute(initials: any):Promise<any> {
        const response = this.findUsersByInitialsRepository.findByInitials(initials)
        return  response
    }
}