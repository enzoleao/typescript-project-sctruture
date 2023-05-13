import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { AppError } from "../../../../err/AppError"
import { IUserRepository } from '../../repositories/User.repository'

interface LoginTypes {
    email: string,
    password: string
}
interface LoginResponse {
    user: {
      id: string
      name: string 
      email: string 
      avatar: string 
      number: string 
      username: string
      birthday: Date
    },
    token: string
  }

export class AuthenticateUserUseCase {
    constructor(
        private userRepository: IUserRepository){}

    async execute ({email, password}: LoginTypes):Promise<LoginResponse>{
        const user = await this.userRepository.findByEmail(email)
        
        if (!user) {
            throw new AppError("Email or password incorret!", 401)
        }
        
        const passwordMatch = await compare(password, user.password)
        
        if (!passwordMatch) {
            throw new AppError("Email or password incorrect!", 401)
        }

        const token = sign({}, process.env.SECRETJWT as string, {
            subject: String(user.id),
            expiresIn: "1d"
        })
        const authReturn: LoginResponse = {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                avatar: `${process.env.PROTOCOL}://${process.env.HOST}/${user.avatar}`,
                username: user.username,
                number: user.number,
                birthday: user.birthday,
                
            },
            token
        }
        return authReturn
    }
}