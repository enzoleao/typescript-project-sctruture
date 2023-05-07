import { Medias, Reflections, Location } from "@prisma/client"


export interface memoryUserResponseDTO {
    id: number,
    name: string,
    authorId: string
    medias: Medias
    reflections: Reflections
    usersInMemory: []
    location: Location
}