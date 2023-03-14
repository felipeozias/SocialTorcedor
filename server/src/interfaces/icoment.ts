import { Types } from "mongoose";
import IUser from "./iuser";

export default interface IComent {
    _id?: Types.ObjectId;
    content: string;
    author: Types.ObjectId | IUser;
    createdAt?: Date;
    updatedAt?: Date;
}
