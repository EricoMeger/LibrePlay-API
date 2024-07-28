import { UserLoginDTO } from "../../dto/UserLoginDTO"
import { ValidatorResponse } from "../../services/interface/IValidatorResponse"

export interface IUserLoginController {
    loginUser(data: UserLoginDTO): Promise<ValidatorResponse>
}