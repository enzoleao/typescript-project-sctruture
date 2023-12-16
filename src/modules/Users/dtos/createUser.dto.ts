export interface CreateUserRequestDTO {
  email: string
  name: string
  password: string
}
export interface CreateUserResponseDTO {
  name: string
  email: string
  role_id: number
  password: undefined
  createdAt: Date
}
