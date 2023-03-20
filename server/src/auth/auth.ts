import { NextFunction, Request, Response } from "express";
import UserService from "../services/user-service";
import IResult from "../interfaces/iresult";
import IUser from "../interfaces/iuser";
import jwt from "jsonwebtoken";
import Logger from "../logger/logger";
import RedisDb from "../database/redisdb";

export default class Auth {
    constructor() {}

    static async authLogin(req: Request, res: Response, next: NextFunction) {
        try {
            const nickname = req.body.nickname.toLowerCase() || "";
            const password = req.body.password || "";
            const service = new UserService();
            const result: IResult<IUser> = await service.authenticate(
                nickname,
                password
            );

            if (result.status === 404) {
                return res.status(401).json(result.errors);
            }

            const token: string = jwt.sign(
                {
                    nickname: result.data?._id,
                },
                result.data?.nickname as string,
                { expiresIn: 3600 }
            );

            const client = RedisDb.client();
            client.set(token, JSON.stringify(result.data), {
                EX: 3600,
            });

            req.body.token = token;
            next();
        } catch (err) {
            Logger.error("Houve um erro ao registrar o token de acesso", err);
            res.status(500).json({
                errors: ["Houve um erro interno"],
            });
        }
    }

    static async verifyAuth(req: Request, res: Response, next: NextFunction) {
        const token: string = req.headers.authorization as string;

        if (!token) {
            return res.status(401).json({ error: "Token de sessão ausente" });
        }

        try {
            const client = RedisDb.client();
            const user = await client.get(token);

            if (!user)
                return res
                    .status(401)
                    .json({ error: "Token de sessão inválido" });

            req.body.userData = JSON.parse(user);
            next();
        } catch (err) {
            Logger.error("Houve um erro ao recuperar token de sessão", err);
            res.status(500).json({
                errors: ["Houve um erro interno"],
            });
        }
    }

    static async logout(req: Request, res: Response) {
        const token: string = req.headers.authorization as string;

        if (!token)
            return res.status(401).json({ error: "Token de sessão ausente" });

        try {
            const client = RedisDb.client();
            await client.del(token || "");
            res.status(200).json({ message: "Sucesso ao fazer logout!" });
        } catch (err) {
            Logger.error("Houve um erro ao excluir token de sessão", err);
            res.status(500).json({
                errors: ["Houve um erro interno"],
            });
        }
    }

    static async createSession(data: any) {
        try {
            const token: string = jwt.sign(
                {
                    nickname: data._id,
                },
                data.nickname as string,
                { expiresIn: 3600 }
            );

            const client = RedisDb.client();
            client.set(token, JSON.stringify(data), {
                EX: 3600,
            });
            return {
                message: "Sessão criada com sucesso",
                error: false,
                token,
            };
        } catch (err) {
            return {
                message: "Houve um erro ao criar a sessão",
                error: err,
                token: null,
            };
        }
    }
}
