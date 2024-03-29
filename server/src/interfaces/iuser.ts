import { Types } from "mongoose";

export default interface IUser {
    _id?: Types.ObjectId;
    nickname: string;
    name: string;
    password?: string;
    team: string;
    pathImage?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
