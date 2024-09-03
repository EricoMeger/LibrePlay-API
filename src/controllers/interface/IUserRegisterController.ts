import { UserRegisterDTO } from "../../DTO/UserRegisterDTO"
import { ValidatorResponse } from "../../domain/interface/IValidatorResponse"

export interface IUserRegisterController {
    registerUser(user: UserRegisterDTO): Promise<ValidatorResponse>
}