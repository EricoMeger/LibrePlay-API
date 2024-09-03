import { UserLoginDTO } from "../../../DTO/UserLoginDTO"
import { ValidatorResponse } from "../../../domain/interface/IValidatorResponse"

export interface IUserLogin {
    loginUser(data: UserLoginDTO): Promise<ValidatorResponse>
}