import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserDB = async (payload: IUser): Promise<IUser> => {
    const user = new User(payload);
    await user.save();
    console.log(user.fullName());

    return user;
};

export const getUserDB = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
};

export const getSingleUserDB = async (
    payload: string
): Promise<IUser | null> => {
    const user = await User.findById({ _id: payload });
    return user;
};

export const getRollOneUserDB = async () => {
    const RollOne = await User.getRollOneUsers();
    return RollOne;
};
