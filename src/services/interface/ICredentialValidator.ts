import { UserLoginDTO } from "../../dto/UserLoginDTO"
import { ValidatorResponse } from "./IValidatorResponse"

export interface ICredentialValidator {
    authenticateUser(data: UserLoginDTO, credentials: any) : Promise<ValidatorResponse>
}