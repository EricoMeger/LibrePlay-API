import { IUserLoginController } from "./interface/IUserLoginController";
import { UserLoginDTO } from "../dto/UserLoginDTO";
import { ValidatorResponse } from "../services/interface/IValidatorResponse";
import UserLoginValidator from "../services/validator/UserLoginValidator";
import UserRepository from "../repository/UserRepository";
import CredentialValidator from "../services/credential/CredentialValidator";

class UserLoginController implements IUserLoginController{

    private userLoginValidator: UserLoginValidator;
    private userRepository: UserRepository;
    private authenticateCredentials: CredentialValidator;

    constructor() {
        this.userLoginValidator = new UserLoginValidator();
        this.userRepository = new UserRepository();
        this.authenticateCredentials = new CredentialValidator();
    }

    private validateFields(data: UserLoginDTO) {
        return this.userLoginValidator.validateFields(data)
    }

    private async findUser(email: string) {
        return await this.userRepository.findUserByEmail(email)
    }

    private async validateCredentials(data: UserLoginDTO, credentials: any) {
        return await this.authenticateCredentials.authenticateUser(data, credentials)
    }

    public async loginUser(data: UserLoginDTO): Promise<ValidatorResponse> {
        let response = this.validateFields(data)
        if(response.sucess){
            try {
                let result = await this.findUser(data.user.email)
                return await this.validateCredentials(data, result)
            } catch (error) {
                response.sucess = false
                response.message = "Error logging in user"
                console.log(error)
            }
        }

        return response
    }

} export default UserLoginController