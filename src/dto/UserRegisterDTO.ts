
export interface UserDTO {
    [key: string]: string;
    name: string,
    email: string,
    password: string
}

export interface UserRegisterDTO {
    user: UserDTO
}