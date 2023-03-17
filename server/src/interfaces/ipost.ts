import { Types } from "mongoose";
import IComent from "./icoment";
import IUser from "./iuser";

export default interface IPost {
    _id?: Types.ObjectId;
    content: string;
    pathImage: string;
    author: Types.ObjectId | IUser;
    likes: Types.ObjectId[];
    comments?: IComent[];
    createdAt?: Date;
    updatedAt?: Date;
}
