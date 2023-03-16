import { Types } from "mongoose";
import IUser from "./iuser";

export default interface IMessage {
    _id?: Types.ObjectId;
    message: string;
    author: Types.ObjectId | IUser;
    createdAt?: Date;
    updatedAt?: Date;
}
