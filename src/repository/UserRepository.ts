import { UserRegisterDTO } from '../dto/UserRegisterDTO';
import UsersModel from '../model/UsersModel';
import IUserRepository from './interface/IUserRepository';

class UserRepository implements IUserRepository {
    public async createUser(userData: UserRegisterDTO) {
        try {
            //A biblioteca é do modelo ESM, como o projeto é commonJS nao rola importar normal
            const bcrypt = await import('bcrypt-ts');

            const salt = await bcrypt.genSalt(10);

            const hashedPassword = await bcrypt.hash(userData.user.password, salt);

            const newUser = await UsersModel.create({
                name: userData.user.name,
                email: userData.user.email,
                password: hashedPassword,
                created_at: new Date()
            });

            return newUser;
        } catch (error) {
            throw error;
        }
    }

    public async findUserByEmail(email: string) {
        try {
            const user = await UsersModel.findOne({
                where: {
                    email: email
                }
            });
    
            return user;
        } catch (error) {
            throw error;
        }
    }
}

export default UserRepository;