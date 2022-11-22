export interface IUser {
    id: string;
    email: string;
    password: string;
}

export interface IUserCreate {
    email: string;
    password: string;
}