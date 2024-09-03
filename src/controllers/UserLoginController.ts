import { IUserLoginController } from "./interface/IUserLoginController";
import { UserLoginDTO } from "../DTO/UserLoginDTO";
import { ValidatorResponse } from "../domain/interface/IValidatorResponse";
import UserLogin from "../domain/use-cases/UserLogin";

class UserLoginController implements IUserLoginController{

    private userLogin: UserLogin;
    constructor() {
        this.userLogin = new UserLogin();
    }

    private async callUseCase(data: UserLoginDTO) {
        return this.userLogin.loginUser(data)
    }

    public async loginUser(data: UserLoginDTO): Promise<ValidatorResponse> {
        return await this.callUseCase(data)
    }

} export default UserLoginController