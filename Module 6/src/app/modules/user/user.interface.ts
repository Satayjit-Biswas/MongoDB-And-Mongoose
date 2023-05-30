import { HydratedDocument, Model } from "mongoose";

// interface
export interface IUser {
    name: string;
    roll: number;
    email: string;
    phone: number;
}

// instance methods:
export interface IUserMethods {
    fullName(): string;
}

// Statics
export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getRollOneUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
