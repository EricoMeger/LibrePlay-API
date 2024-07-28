import { UserLoginDTO } from "../../dto/UserLoginDTO";
import { ValidatorResponse } from "./IValidatorResponse";

export interface IUserLoginValidator {
    validateFields(data: UserLoginDTO): ValidatorResponse
}