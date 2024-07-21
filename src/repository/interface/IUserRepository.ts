
export default interface IUserRepository {
    createUser(userData: any): Promise<any>;
}