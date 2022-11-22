export interface IUser {
    id: string;
    email: string;
    password: string;
}

export interface IUserCreateLogin {
    email: string;
    password: string;
}