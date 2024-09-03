import { UserLoginDTO } from "../../DTO/UserLoginDTO"
import { ValidatorResponse } from "../../domain/interface/IValidatorResponse"

export interface IUserLoginController {
    loginUser(data: UserLoginDTO): Promise<ValidatorResponse>
}