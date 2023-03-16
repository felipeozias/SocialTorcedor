import { model, Schema } from "mongoose";
import IGroup from "../interfaces/igroup";

const messageSchema = new Schema(
    {
        message: { type: String, required: true, trim: true, maxLength: 100 },
        author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    },
    {
        timestamps: true,
    }
);

const groupSchema = new Schema(
    {
        pathImage: { type: String },
        title: { type: String, required: true, trim: true, minLength: 5, maxLength: 50 },
        admin: { type: Schema.Types.ObjectId, ref: "User", required: true },
        members: { type: [Schema.Types.ObjectId], ref: "User" },
        chat: [messageSchema],
    },
    {
        timestamps: true,
    }
);

export const Group = model<IGroup>("Group", groupSchema);
