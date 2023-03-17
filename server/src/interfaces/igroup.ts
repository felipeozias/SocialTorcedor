import { Types } from "mongoose";
import IMessage from "./imessage";
import IUser from "./iuser";

export default interface IGroup {
    _id?: Types.ObjectId;
    title: string;
    pathImage: string;
    admin: Types.ObjectId | IUser;
    members: Types.ObjectId[];
    chat?: Types.ObjectId[] | IMessage[];
    createdAt?: Date;
    updatedAt?: Date;
}
