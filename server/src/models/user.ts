import { model, Schema } from "mongoose";
import IUser from "../interfaces/iuser";

const userSchema = new Schema(
    {
        nickname: { type: String, required: true, unique: true, trim: true, lowercase: true, minLength: 5, maxLength: 25 },
        name: { type: String, required: true, trim: true, minLength: 5, maxLength: 50 },
        password: { type: String, required: true, select: false },
        team: { type: String, required: true },
        pathImage: { type: String },
    },
    {
        timestamps: true,
    }
);

export const User = model<IUser>("User", userSchema);
