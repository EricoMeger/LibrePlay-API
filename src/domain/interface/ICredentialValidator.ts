import { UserLoginDTO } from "../../DTO/UserLoginDTO"
import { ValidatorResponse } from "./IValidatorResponse"

export interface ICredentialValidator {
    authenticateUser(data: UserLoginDTO, credentials: any) : Promise<ValidatorResponse>
}