import { UserRegisterDTO } from "../../dto/UserRegisterDTO"
import { ValidatorResponse } from "../../services/interface/IValidatorResponse"

export interface IUserRegisterController {
    registerUser(user: UserRegisterDTO): Promise<ValidatorResponse>
}