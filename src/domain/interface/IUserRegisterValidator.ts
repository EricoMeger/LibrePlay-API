import { UserRegisterDTO } from "../../DTO/UserRegisterDTO";
import { ValidatorResponse } from "./IValidatorResponse";

export interface IUserRegisterValidator {
    validateFields(data: UserRegisterDTO): ValidatorResponse
}