import { IUserRegisterController } from "./interface/IUserRegisterController";
import { UserRegisterDTO } from "../DTO/UserRegisterDTO";
import { ValidatorResponse } from "../domain/interface/IValidatorResponse";
import UserRegister from "../domain/use-cases/UserRegister";

class UserRegisterController implements IUserRegisterController {

    private userRegister: UserRegister;

    constructor() {
        this.userRegister = new UserRegister();
    }

    private async callUseCase(data: UserRegisterDTO) {
        return this.userRegister.registerUser(data);
    }

    public async registerUser(user: UserRegisterDTO): Promise<ValidatorResponse> {
        return await this.callUseCase(user)
    }
} 

export default UserRegisterController;