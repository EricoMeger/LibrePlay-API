import { UserLoginDTO } from "../../dto/UserLoginDTO";
import { ICredentialValidator } from "../interface/ICredentialValidator";
import { ValidatorResponse } from "../interface/IValidatorResponse";


class CredentialValidator implements ICredentialValidator{

    private async validatePassword(inputPassword: string, storedHash: string): Promise<ValidatorResponse> {
        try {
            const bcrypt = await import('bcrypt-ts');
            const match = await bcrypt.compare(inputPassword, storedHash);
            if (!match) {
                return {
                    sucess: false,
                    message: 'Invalid password'
                }
            }

            return {
                sucess: true,
                message: 'User logged in successfully'
            }
        } catch (error) {
            return {
                sucess: false,
                message: "error validating password"
            }
        }
    }
    public async authenticateUser(data: UserLoginDTO, credentials: any): Promise<ValidatorResponse> {
        try {
            return await this.validatePassword(data.user.password, credentials.password)
        } catch (error) {
            return {
                sucess: false,
                message: "error authenticating user"
            }
        }
    }

} export default CredentialValidator