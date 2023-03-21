import { Types } from "mongoose";
import IMessage from "../interfaces/imessage";
import IResult from "../interfaces/iresult";
import IGroup from "../interfaces/igroup";
import { Group } from "../models/group";
import { io } from "../server";
import { User } from "../models/user";

export default class GroupService {
    async create(data: IGroup): Promise<IResult<IGroup>> {
        let result: IResult<IGroup> = { errors: [] };

        try {
            const group = await Group.create(data);
            result.data = group;
            result.status = 201;
            io.pubGroup("insert", group);
        } catch (error: any) {
            result.errors?.push(error.message);
            result.status = 500;
        }

        return result;
    }

    async remove(id: string): Promise<IResult<IGroup>> {
        let result: IResult<IGroup> = { errors: [] };
        try {
            const group = await Group.findByIdAndDelete(id);
            if (!group) {
                result.errors?.push("Grupo não encontrado");
                result.status = 404;
            } else {
                result.data = group;
                result.status = 200;
                io.pubGroup("delete", group);
            }
        } catch (error: any) {
            result.errors?.push(error.message);
            result.status = 500;
        }
        return result;
    }

    async get(id: string): Promise<IResult<IGroup>> {
        let result: IResult<IGroup> = { errors: [] };
        try {
            const group = await Group.findById(id)
                .populate("admin", "name nickname team pathImage")
                .populate("members", "name nickname pathImage")
                .populate({ path: "chat.author", select: "name nickname pathImage" });
            if (!group) {
                result.errors?.push("Grupo não encontrado");
                result.status = 404;
            } else {
                result.data = group;
                result.status = 200;
            }
        } catch (error: any) {
            result.errors?.push(error.message);
            result.status = 500;
        }
        return result;
    }

    async list(userAuth: string): Promise<IResult<IGroup[]>> {
        let result: IResult<IGroup[]> = { errors: [] };

        try {
            const Groups = await Group.find({ $or: [{ admin: userAuth }, { members: { $in: [userAuth] } }] })
                .sort({ updatedAt: -1 })
                .populate("admin", "name nickname team pathImage")
                .populate("members", "name nickname pathImage");
            result.data = Groups;
            result.status = 200;
        } catch (error: any) {
            result.errors?.push(error.message);
            result.status = 500;
        }

        return result;
    }

    async update(id: string, data: IGroup): Promise<IResult<IGroup>> {
        let result: IResult<IGroup> = { errors: [] };
        try {
            const user = await Group.findByIdAndUpdate(id, data, { new: true }); //o new é para trazer ja o objeto atualizado
            if (!user) {
                result.errors?.push("Grupo não encontrado");
                result.status = 404;
            } else {
                result.data = user;
                result.status = 200;
                io.pubGroup("update", user);
            }
        } catch (error: any) {
            result.errors?.push(error.message);
            result.status = 500;
        }

        return result;
    }

    async removeMember(_id: string, _idUser: string): Promise<IResult<Boolean>> {
        let result: IResult<Boolean> = { errors: [], data: false };
        const group = await Group.findById(_id);
        try {
            if (!group) {
                result.errors?.push("Group não encontrado");
                result.status = 404;
                return result;
            }
            const idUser = new Types.ObjectId(_idUser);
            if (group.members?.indexOf(idUser) > -1) {
                group.members?.splice(group.members?.indexOf(idUser), 1);
                await group.save();
                result.data = true;
                io.pubGroup("update", group);
            }
            result.status = 200;
            return result;
        } catch (error: any) {
            result.errors?.push(error.message);
            result.status = 500;
        }
        return result;
    }

    async addMessage(_id: string, message: IMessage): Promise<IResult<Boolean>> {
        let result: IResult<Boolean> = { errors: [], data: false };

        try {
            const group = await Group.findOne({ _id }).select("-chat");
            if (!group) {
                result.errors?.push("Group não encontrado");
                result.status = 404;
                return result;
            }
            const res = await Group.updateOne({ _id }, { $push: { chat: message } });
            if (res.modifiedCount === 0) {
                result.errors?.push("Grupo não encontrado");
                result.status = 404;
                return result;
            }
            result.data = true;
            result.status = 200;
            const author_id = message.author.toString();
            const author = await User.findById(author_id);
            if (author) {
                message.author = author;
            }
            io.pubChat(group, message);
        } catch (error: any) {
            result.errors?.push(error.message);
            result.status = 500;
        }

        return result;
    }
}
