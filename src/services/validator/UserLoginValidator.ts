import { UserLoginDTO } from "../../dto/UserLoginDTO";
import { IUserLoginValidator } from "../interface/IUserLoginValidator";
import { ValidatorResponse } from "../interface/IValidatorResponse";


class UserLoginValidator implements IUserLoginValidator {
    
    private validateData(data: UserLoginDTO, keys: string[], type: string, maxLength: number): ValidatorResponse {
        let valid: boolean = true
        let error: string  = ''

        for(let key of keys){
            if(typeof data.user[key] !== type){
                valid = false
                error = `expected ${key} to be ${type}`
            } else if (data.user[key].length > maxLength) {
                valid = false
                error = `${key} exceeds max lenght ${maxLength}`
            }
        }

        return {
            sucess: valid,
            message: error
        }
    }

    private checkMissingFields(data: UserLoginDTO, keys: string[]): ValidatorResponse {
        let valid: boolean = true
        let error: string = ''
        for(let key of keys){
            if(!data.user || !data.user[key]) {
                valid = false
                error = `Missing field ${key}`
            }
        }

        return {
            sucess: valid,
            message: error
        }
    }

    private checkFields(data: UserLoginDTO){
        let keys: string[] = ['email', 'password']

        let response = this.checkMissingFields(data, keys)
        if(!response.sucess){
            return response
        } else {
            return this.validateData(data, keys, "string", 255)        
        }
    }
    
    public validateFields(data: UserLoginDTO): ValidatorResponse {
        return this.checkFields(data)
    }
} export default UserLoginValidator