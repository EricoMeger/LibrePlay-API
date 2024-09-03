import { IUserRegister } from "./interface/IUserRegister";
import { UserRegisterDTO } from "../../DTO/UserRegisterDTO";
import UserRegisterValidator from "../services/UserRegisterValidator";
import { ValidatorResponse } from "../interface/IValidatorResponse";
import UserRepository from "../../infrastructure/repository/UserRepository";

class UserRegister implements IUserRegister {

    private userRegisterValidator: UserRegisterValidator;
    private userRepository: UserRepository;

    constructor() {
        this.userRegisterValidator = new UserRegisterValidator();
        this.userRepository = new UserRepository();
    }

    private validateFields(data: UserRegisterDTO) {
        return this.userRegisterValidator.validateFields(data);
    }

    private async insertUser(data: UserRegisterDTO) {
        return await this.userRepository.createUser(data);
    }

    public async registerUser(user: UserRegisterDTO): Promise<ValidatorResponse> {
        let response =  this.validateFields(user);
        if(response.sucess){
            try {
                await this.insertUser(user);
                response.message = "User registered successfully";
            } catch (error) {
                response.sucess = false;
                response.message = "Error registering user";
                console.log(error)
            }
        }

        return response;
    }
} 

export default UserRegister;