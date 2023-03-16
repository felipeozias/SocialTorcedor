import { Types } from "mongoose";
import IComent from "../interfaces/icoment";
import IResult from "../interfaces/iresult";
import IPost from "../interfaces/ipost";
import { Post } from "../models/post";

export default class PostService {
    async create(data: IPost): Promise<IResult<IPost>> {
        let result: IResult<IPost> = { errors: [] };

        try {
            const post = await Post.create(data);
            result.data = post;
            result.status = 201;
        } catch (error: any) {
            result.errors?.push(error.message);
            result.status = 500;
        }

        return result;
    }

    async remove(id: string): Promise<IResult<IPost>> {
        let result: IResult<IPost> = { errors: [] };
        try {
            const post = await Post.findByIdAndDelete(id);
            if (!post) {
                result.errors?.push("Post não encontrado");
                result.status = 404;
            } else {
                result.data = post;
                result.status = 200;
            }
        } catch (error: any) {
            result.errors?.push(error.message);
            result.status = 500;
        }
        return result;
    }

    async get(id: string): Promise<IResult<IPost>> {
        let result: IResult<IPost> = { errors: [] };
        try {
            const post = await Post.findById(id)
                .populate("author", "name nickname team pathImage")
                .populate({ path: "comments.author", select: "name nickname" });
            if (!post) {
                result.errors?.push("Post não encontrado");
                result.status = 404;
            } else {
                result.data = post;
                result.status = 200;
            }
        } catch (error: any) {
            result.errors?.push(error.message);
            result.status = 500;
        }
        return result;
    }

    async list(): Promise<IResult<IPost[]>> {
        let result: IResult<IPost[]> = { errors: [] };

        try {
            const posts = await Post.find()
                .sort({ updatedAt: -1 })
                .populate("author", "name nickname team pathImage")
                .populate({ path: "comments.author", select: "name nickname" });
            result.data = posts;
            result.status = 200;
        } catch (error: any) {
            result.errors?.push(error.message);
            result.status = 500;
        }

        return result;
    }

    async like(_id: string, _idUser: string): Promise<IResult<Boolean>> {
        let result: IResult<Boolean> = { errors: [] };
        const post = await Post.findById(_id);
        try {
            if (!post) {
                result.errors?.push("Post não encontrado");
                result.status = 404;
                return result;
            }
            const idUser = new Types.ObjectId(_idUser);
            if (post.likes?.indexOf(idUser) === -1) {
                post.likes?.push(idUser);
                result.data = true;
            } else {
                post.likes?.splice(post.likes?.indexOf(idUser), 1);
                result.data = false;
            }
            await post.save();
            result.status = 200;
            return result;
        } catch (error: any) {
            result.errors?.push(error.message);
            result.status = 500;
        }
        return result;
    }

    async addComment(_id: string, coment: IComent): Promise<IResult<Boolean>> {
        let result: IResult<Boolean> = { errors: [], data: false };

        try {
            const res = await Post.updateOne({ _id }, { $push: { comments: coment } });
            if (res.modifiedCount === 0) {
                result.errors?.push("Post não encontrado");
                result.status = 404;
                return result;
            }
            result.data = true;
            result.status = 200;
        } catch (error: any) {
            result.errors?.push(error.message);
            result.status = 500;
        }

        return result;
    }

    async removeComment(_id: string, idComment: string): Promise<IResult<Boolean>> {
        let result: IResult<Boolean> = { errors: [], data: false };

        try {
            const res = await Post.updateOne({ _id }, { $pull: { comments: { _id: idComment } } });
            if (res.modifiedCount === 0) {
                result.errors?.push("Post ou comentário não encontrado");
                result.status = 404;
                return result;
            }
            result.data = true;
            result.status = 200;
        } catch (error: any) {
            result.errors?.push(error.message);
            result.status = 500;
        }

        return result;
    }
}
