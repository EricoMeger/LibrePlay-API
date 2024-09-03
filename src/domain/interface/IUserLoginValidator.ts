import { UserLoginDTO } from "../../DTO/UserLoginDTO";
import { ValidatorResponse } from "./IValidatorResponse";

export interface IUserLoginValidator {
    validateFields(data: UserLoginDTO): ValidatorResponse
}