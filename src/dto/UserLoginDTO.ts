export interface CredentialsDTO {
    [key: string]: string;
    email: string,
    password: string
}

export interface UserLoginDTO {
    user: CredentialsDTO
}