
export interface IUserRepository {
    createUser(userData: any): Promise<any>;
    findUserByEmail(email: string): Promise<any>;
}