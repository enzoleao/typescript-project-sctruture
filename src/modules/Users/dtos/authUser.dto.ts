export interface AuthUserRequestDTO {
  email: string
  password: string
}
export interface AuthUserResponseDTO {
  user: {
    name: string
    email: string
    role_id: number
    password: undefined
    createdAt: Date
  }
  authorization: {
    token: string
  }
}
