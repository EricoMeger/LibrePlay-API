import { ValidatorResponse } from "./IValidatorResponse";

export interface IMovieSearchValidator {
    validateFields(searchParams: Record<string, any>): ValidatorResponse
}