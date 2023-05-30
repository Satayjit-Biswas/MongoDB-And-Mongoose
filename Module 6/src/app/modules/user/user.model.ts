import { Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// Create a new Model type that knows about IUserMethods...
// type UserModel = Model<IUser, {}, IUserMethods>;

// scheme
const userScheme = new Schema<IUser, UserModel, IUserMethods>({
    name: {
        type: String,
        Request: true,
    },
    roll: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: Number,
        require: true,
    },
});

userScheme.method("fullName", function fullName() {
    return this.name;
});

userScheme.static("getRollOneUsers", async function getRollOneUsers() {
    const RollOne = await this.find({ roll: 1 });
    return RollOne;
});

const User = model<IUser, UserModel>("User", userScheme);

export default User;
