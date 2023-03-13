import { Request, Response } from "express";
import IResult from "../interfaces/iresult";
import IUser from "../interfaces/iuser";
import Logger from "../logger/logger";
import UserService from "../services/user-service";

class UserControlller {
    async create(req: Request, res: Response) {
        // #swagger.tags = ["User"];
        // #swagger.description = "Endpoints para criar um usuário";

        try {
            /* #swagger.parameters[] = { 
                in: 'body',
                description: 'Informações do usuário',
                schema: { $ref: "#/definitions/AddUser" }
            } */
            const data: IUser = req.body;
            const service = new UserService();

            const result: IResult<IUser> = await service.create(data);
            // #swagger.responses[201] = { schema: { data: {$ref: "#/definitions/User" }, status: 201 } }
            // #swagger.responses[400] = { schema: { errors: ["[nickname]: O apelido já existe"], status: 400 } }
            // #swagger.responses[422] = { description:"Erro de Validação", schema: {$ref: "#/definitions/UserValidator"} }
            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            //#swagger.responses[500] ={schema: { $ref: "#/definitions/Error500" }}

            Logger.error("Erro ao criar usuário", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const service = new UserService();
            const result: IResult<IUser> = await service.getById(id);
            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao recuperar usuário por id", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async exists(req: Request, res: Response) {
        try {
            const nickname = req.params.nickname;
            const service = new UserService();
            const result: IResult<boolean> = await service.exists(nickname);
            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao verificar se usuário existe", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async list(req: Request, res: Response) {
        try {
            const name: string = (req.query.name as string) || "";
            const service = new UserService();
            const result: IResult<IUser[]> = await service.list(name);
            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao listar usuários", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const data = req.body;
            const _id = req.params.id;
            const service = new UserService();
            const result: IResult<IUser> = await service.update(_id, data);
            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao atualizar usuário", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const service = new UserService();
            const result: IResult<IUser> = await service.remove(id);
            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao remover usuário", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async authenticate(req: Request, res: Response) {
        try {
            const nickname = req.body.nickname.toLowerCase() || "";
            const password = req.body.password;
            const service = new UserService();
            const result: IResult<IUser> = await service.authenticate(nickname, password);
            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao autenticar usuário", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }
}

export const user = new UserControlller();
