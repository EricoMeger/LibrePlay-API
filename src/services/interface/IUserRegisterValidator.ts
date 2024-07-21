import { UserRegisterDTO } from "../../dto/UserRegisterDTO";
import { ValidatorResponse } from "./IValidatorResponse";

export interface IUserRegisterValidator {
    validateFields(data: UserRegisterDTO): ValidatorResponse
}