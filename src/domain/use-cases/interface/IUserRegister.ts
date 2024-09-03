import { UserRegisterDTO } from "../../../DTO/UserRegisterDTO"
import { ValidatorResponse } from "../../../domain/interface/IValidatorResponse"

export interface IUserRegister {
    registerUser(user: UserRegisterDTO): Promise<ValidatorResponse>
}