import { UserRegisterDTO } from "../../dto/UserRegisterDTO"

export interface IUserRegisterController {
    registerUser(user: UserRegisterDTO): Promise<any>
}