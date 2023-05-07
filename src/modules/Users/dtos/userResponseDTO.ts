import { Memory, UsersInMemories } from "@prisma/client"


export interface userResponseDTO {
    id: string
    avatar?: string | null
    email: string
    name: string | null
    password: string 
}
