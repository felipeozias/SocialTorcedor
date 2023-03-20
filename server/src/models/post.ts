import { model, Schema } from "mongoose";
import IPost from "../interfaces/ipost";

const comentSchema = new Schema(
    {
        content: { type: String, required: true, trim: true, maxLength: 2500 },
        author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    },
    {
        timestamps: true,
    }
);

const postSchema = new Schema(
    {
        pathImage: { type: String, required: true },
        content: { type: String, required: true, trim: true, minLength: 5, maxLength: 2500 },
        author: { type: Schema.Types.ObjectId, ref: "User", required: true },
        likes: { type: [Schema.Types.ObjectId], ref: "User" },
        comments: [comentSchema],
    },
    {
        timestamps: true,
    }
);

export const Post = model<IPost>("Post", postSchema);
