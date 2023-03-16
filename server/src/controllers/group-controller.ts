import { Request, Response } from "express";
import IGroup from "../interfaces/igroup";
import IMessage from "../interfaces/imessage";

import IResult from "../interfaces/iresult";
import Logger from "../logger/logger";
import GroupService from "../services/group-service";

class GroupController {
    async create(req: Request, res: Response) {
        try {
            /* 
            #swagger.tags = ["Group"];
            #swagger.description = "Endpoints para criar um grupo";
            
            #swagger.parameters[] = { 
                in: 'body',
                description: 'Informações do grupo',
                schema: { $ref: "#/definitions/AddGroup"}
            }

            #swagger.responses[201] = { schema: { data: {$ref: "#/definitions/Group" }, status: 201 } }
            #swagger.responses[422] = { description:"Erro de Validação", schema: {$ref: "#/definitions/GroupValidator"} }
            #swagger.responses[500] ={schema: { $ref: "#/definitions/Error500" }}

        */
            const data: IGroup = req.body;
            const service = new GroupService();

            const result: IResult<IGroup> = await service.create(data);

            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao criar grupo", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async update(req: Request, res: Response) {
        /*
            #swagger.tags = ["Group"];
            #swagger.description = "Endpoints para editar um grupo";

            #swagger.parameters['id'] = {
                in: 'path',
                description: 'User ID.',
                required: true,
            }

             #swagger.parameters[] = { 
                in: 'body',
                description: 'Informações do grupo',
                schema: { $ref: "#/definitions/AddGroup"}
            }
           
            #swagger.responses[200] = { schema: { data: [{$ref: "#/definitions/Group" }], status: 200 } }
             #swagger.responses[404] = {
                description: "Grupo não encontrado", 
                schema: { errors: ["Grupo não encontrado"], status: 404 } 
            }
            #swagger.responses[422] = { description:"Erro de Validação", schema: {$ref: "#/definitions/GroupValidator"} }
            #swagger.responses[500] = {schema: { $ref: "#/definitions/Error500" }}

        */
        try {
            const data = req.body;
            const _id = req.params.id;
            const service = new GroupService();
            const result: IResult<IGroup> = await service.update(_id, data);
            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao atualizar grupo", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async remove(req: Request, res: Response) {
        try {
            /* 
            #swagger.tags = ["Group"];
            #swagger.description = "Endpoints para remover um grupo";
            
             #swagger.parameters['id'] = {
                in: 'path',
                description: 'Grupo ID.',
                required: true,
                type: 'ObjectId'
            }

            #swagger.responses[200] = { schema: { data: {$ref: "#/definitions/Group" }, status: 200 } }
             #swagger.responses[404] = {
                description: "Grupo não encontrado", 
                schema: { errors: ["Grupo não encontrado"], status: 404 } 
            }
            #swagger.responses[422] = { description:"Erro de Validação", schema: {$ref: "#/definitions/IdValidator"} }
            #swagger.responses[500] ={schema: { $ref: "#/definitions/Error500" }}

        */
            const id = req.params.id;
            const service = new GroupService();

            const result: IResult<IGroup> = await service.remove(id);

            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao remover o post", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async get(req: Request, res: Response) {
        try {
            /* 
            #swagger.tags = ["Group"];
            #swagger.description = "Endpoints para recuperar um grupo";
            
             #swagger.parameters['id'] = {
                in: 'path',
                description: 'Grupo ID.',
                required: true,
                type: 'ObjectId'
            }

            #swagger.responses[200] = { schema: { data: {$ref: "#/definitions/Group" }, status: 200 } }
             #swagger.responses[404] = {
                description: "Grupo não encontrado", 
                schema: { errors: ["Grupo não encontrado"], status: 404 } 
            }
            #swagger.responses[422] = { description:"Erro de Validação", schema: {$ref: "#/definitions/IdValidator"} }
            #swagger.responses[500] ={schema: { $ref: "#/definitions/Error500" }}

        */
            const id = req.params.id;
            const service = new GroupService();

            const result: IResult<IGroup> = await service.get(id);

            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao recuperar o grupo", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async list(req: Request, res: Response) {
        /*
            #swagger.tags = ["Group"];
            #swagger.description = "Endpoints para listar os grupos que o usuário logado pertence do mais recente para o mais antigo";

            #swagger.responses[200] = { schema: { data: [{$ref: "#/definitions/Group" }], status: 200 } }
            #swagger.responses[500] = {schema: { $ref: "#/definitions/Error500" }}

        */
        try {
            const service = new GroupService();
            const userAuth = req.body.userAuth || "640f6af6ad964b6d45a13c35"; //TODO: Remover
            const result: IResult<IGroup[]> = await service.list(userAuth);

            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao listar grupos", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async removeMember(req: Request, res: Response) {
        /* 
            #swagger.tags = ["Group"];
            #swagger.description = "Endpoints para sair de um grupo";
            
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'Grupo ID.',
                required: true,
                type: 'ObjectId'
            }

             #swagger.parameters['userId'] = {
                in: 'path',
                description: 'User ID.',
                required: true,
                type: 'ObjectId'
            }

            #swagger.responses[200] = { schema: {errors:[], data: true, status: 200 }}
            #swagger.responses[404] = {
                description: "Grupo não encontrado", 
                schema: { errors: ["Grupo não encontrado"], status: 404 } 
            }
            #swagger.responses[422] = { description:"Erro de Validação", schema: {$ref: "#/definitions/IdValidator"} }
            #swagger.responses[500] ={schema: { $ref: "#/definitions/Error500" }}

        */

        try {
            const service = new GroupService();

            const result: IResult<Boolean> = await service.removeMember(req.params.id, req.params.userId);

            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao sair de um grupo", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async addMessage(req: Request, res: Response) {
        /* 
            #swagger.tags = ["Group"];
            #swagger.description = "Endpoints para incluir uma mensagem no chat do grupo";
            
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'Post ID.',
                required: true,
                type: 'ObjectId'
            }

            #swagger.parameters[] = { 
                in: 'body',
                description: 'Informações da mensagem',
                schema: { $ref: "#/definitions/AddMessage"}
            }

            #swagger.responses[200] = { schema: {errors:[], data: true, status: 200 }}
            #swagger.responses[404] = {
                description: "Grupo não encontrado", 
                schema: { errors: ["Grupo não encontrado"], status: 404 } 
            }
            #swagger.responses[422] = { description:"Erro de Validação", schema: {$ref: "#/definitions/GroupValidator"} }
            #swagger.responses[500] ={schema: { $ref: "#/definitions/Error500" }}

        */
        try {
            const id = req.params.id;
            const data: IMessage = req.body;
            const service = new GroupService();
            const result: IResult<Boolean> = await service.addMessage(id, data);

            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao adicionar uma mensagem", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }
}

export const group = new GroupController();
