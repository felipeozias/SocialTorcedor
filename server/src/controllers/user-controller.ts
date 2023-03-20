import { Request, Response } from "express";
import IResult from "../interfaces/iresult";
import IUser from "../interfaces/iuser";
import Logger from "../logger/logger";
import UserService from "../services/user-service";

class UserControlller {
    async create(req: Request, res: Response) {
        /* 
            #swagger.tags = ["User"];
            #swagger.description = "Endpoints para criar um usuário";
            
            #swagger.parameters[] = { 
                in: 'body',
                description: 'Informações do usuário',
                schema: { $ref: "#/definitions/AddUser"}
            }

            #swagger.responses[201] = { schema: { data: {$ref: "#/definitions/User" }, status: 201 } }
            #swagger.responses[400] = {
                description: "Apelido já existe", 
                schema: { errors: ["[nickname]: O apelido já existe"], status: 400 } 
            }
            #swagger.responses[422] = { description:"Erro de Validação", schema: {$ref: "#/definitions/UserAddValidator"} }
            #swagger.responses[500] ={schema: { $ref: "#/definitions/Error500" }}

        */

        try {
            const data: IUser = req.body;
            const service = new UserService();

            const result: IResult<IUser> = await service.create(data);

            res.cookie("social-token", result.token, {
                maxAge: 3600,
                httpOnly: true,
            });

            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao criar usuário", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async get(req: Request, res: Response) {
        /*
            #swagger.tags = ["User"];
            #swagger.description = "Endpoints para recuperar um usuário";

             #swagger.parameters['id'] = {
                in: 'path',
                description: 'User ID.',
                required: true,
                type: 'ObjectId'
            }
           
            #swagger.responses[200] = { schema: { data: {$ref: "#/definitions/User" }, status: 200 } }
            #swagger.responses[404] = {
                description: "Usuário não encontrado", 
                schema: { errors: ["Usuário não encontrado"], status: 404 } 
            }
            #swagger.responses[422] = { description:"Erro de Validação", schema: {$ref: "#/definitions/IdValidator"} }
            #swagger.responses[500] ={schema: { $ref: "#/definitions/Error500" }}

        */
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
        /*
            #swagger.tags = ["User"];
            #swagger.description = "Endpoints para verificar se o nickname já existe";

             #swagger.parameters['nickname'] = {
                in: 'path',
                required: true,
                type: 'string'
            }
           
            #swagger.responses[200] = { schema: {errors:[], data: true, status: 200 } }
            #swagger.responses[500] ={schema: { $ref: "#/definitions/Error500" }}

        */
        try {
            const nickname = req.params.nickname || "";
            const service = new UserService();
            const result: IResult<boolean> = await service.exists(nickname);
            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao verificar se usuário existe", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async list(req: Request, res: Response) {
        /*
            #swagger.tags = ["User"];
            #swagger.description = "Endpoints para listar (filtrado ou não) os usuários ordenados por nome";

             #swagger.parameters['name'] = {
                in: 'query',
                description: 'pode ser o nome ou parte do nome do usuário ou do seu nickname.',
                required: false,
                type: 'string'
            }
           
            #swagger.responses[200] = { schema: { data: [{$ref: "#/definitions/User" }], status: 200 } }
            #swagger.responses[500] = {schema: { $ref: "#/definitions/Error500" }}

        */

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
        /*
            #swagger.tags = ["User"];
            #swagger.description = "Endpoints para editar um usuário";

            #swagger.parameters['id'] = {
                in: 'path',
                description: 'User ID.',
                required: true,
            }

             #swagger.parameters[] = { 
                in: 'body',
                description: 'Informações do usuário',
                schema: { $ref: "#/definitions/UpdateUser"}
            }
           
            #swagger.responses[200] = { schema: { data: [{$ref: "#/definitions/User" }], status: 200 } }
             #swagger.responses[404] = {
                description: "Usuário não encontrado", 
                schema: { errors: ["Usuário não encontrado"], status: 404 } 
            }
            #swagger.responses[422] = { description:"Erro de Validação", schema: {$ref: "#/definitions/UserUpdateValidator"} }
            #swagger.responses[500] = {schema: { $ref: "#/definitions/Error500" }}

        */

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
        /*
            #swagger.tags = ["User"];
            #swagger.description = "Endpoints para remover um usuário";

             #swagger.parameters['id'] = {
                in: 'path',
                description: 'User ID.',
                required: true,
                type: 'ObjectId'
            }
           
            #swagger.responses[200] = { schema: { data: {$ref: "#/definitions/User" }, status: 200 } }
            #swagger.responses[404] = {
                description: "Usuário não encontrado", 
                schema: { errors: ["Usuário não encontrado"], status: 404 } 
            }
            #swagger.responses[422] = { description:"Erro de Validação", schema: {$ref: "#/definitions/IdValidator"} }
            #swagger.responses[500] ={schema: { $ref: "#/definitions/Error500" }}

        */
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
        /* 
            #swagger.auto = false;
            #swagger.tags = ["User"];
            #swagger.description = "Endpoints para autenticar um usuário";
            #swagger.parameters[] = { 
                in: 'body',
                description: 'nickname e password do usuário',
                schema: { nickname: "zoro_oliveira", password: "123456"}
            }

            #swagger.responses[200] = { schema: { data: {$ref: "#/definitions/User" }, status: 200 } }
            #swagger.responses[404] = #swagger.responses[404] = {
                description: "Autenticação inválida", 
                schema: { errors: ["Usuário ou senha inválidos"], status: 404 } 
            }
            #swagger.responses[500] ={schema: { $ref: "#/definitions/Error500" }}

        */
        try {
            const token = req.body.token;
            res.cookie("social-token", token, {
                maxAge: 3600,
                httpOnly: true,
            });
            res.status(200).json({ token: token });
        } catch (error: any) {
            Logger.error("Erro ao autenticar usuário", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async getMe(req: Request, res: Response) {
        try {
            const user = req.body.userAuth;

            return res.status(200).json(user);
        } catch (error: any) {
            Logger.error("Erro obter os dados do usuário", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }
}

export const user = new UserControlller();
