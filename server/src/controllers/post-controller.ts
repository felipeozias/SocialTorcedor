import { Request, Response } from "express";
import IComent from "../interfaces/icoment";
import IResult from "../interfaces/iresult";
import IPost from "../interfaces/ipost";
import Logger from "../logger/logger";
import PostService from "../services/post-service";

class PostController {
    async create(req: Request, res: Response) {
        try {
            /* 
            #swagger.tags = ["Post"];
            #swagger.description = "Endpoints para criar um post";
            
            #swagger.parameters[] = { 
                in: 'body',
                description: 'Informações do post',
                schema: { $ref: "#/definitions/AddPost"}
            }

            #swagger.responses[201] = { schema: { data: {$ref: "#/definitions/Post" }, status: 201 } }
            #swagger.responses[422] = { description:"Erro de Validação", schema: {$ref: "#/definitions/PostValidator"} }
            #swagger.responses[500] ={schema: { $ref: "#/definitions/Error500" }}

        */
            const data: IPost = req.body;
            const userAuth: any = req.query.userAuth;

            if (data.author !== userAuth._id)
                return res.status(401).json({ errors: ["Você não tem permissão para criar um post para outro usuário"] });
            const service = new PostService();

            const result: IResult<IPost> = await service.create(data);

            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao criar post", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async remove(req: Request, res: Response) {
        try {
            /* 
            #swagger.tags = ["Post"];
            #swagger.description = "Endpoints para remover um post";
            
             #swagger.parameters['id'] = {
                in: 'path',
                description: 'Post ID.',
                required: true,
                type: 'ObjectId'
            }

            #swagger.responses[200] = { schema: { data: {$ref: "#/definitions/Post" }, status: 200 } }
             #swagger.responses[404] = {
                description: "Post não encontrado", 
                schema: { errors: ["Post não encontrado"], status: 404 } 
            }
            #swagger.responses[422] = { description:"Erro de Validação", schema: {$ref: "#/definitions/IdValidator"} }
            #swagger.responses[500] ={schema: { $ref: "#/definitions/Error500" }}

        */
            const id = req.params.id;
            const service = new PostService();

            const result: IResult<IPost> = await service.remove(id);

            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao remover o post", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async get(req: Request, res: Response) {
        try {
            /* 
            #swagger.tags = ["Post"];
            #swagger.description = "Endpoints para recuperar um post";
            
             #swagger.parameters['id'] = {
                in: 'path',
                description: 'Post ID.',
                required: true,
                type: 'ObjectId'
            }

            #swagger.responses[200] = { schema: { data: {$ref: "#/definitions/Post" }, status: 200 } }
             #swagger.responses[404] = {
                description: "Post não encontrado", 
                schema: { errors: ["Post não encontrado"], status: 404 } 
            }
            #swagger.responses[422] = { description:"Erro de Validação", schema: {$ref: "#/definitions/IdValidator"} }
            #swagger.responses[500] ={schema: { $ref: "#/definitions/Error500" }}

        */
            const id = req.params.id;
            const service = new PostService();

            const result: IResult<IPost> = await service.get(id);

            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao recuperar o post", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async list(req: Request, res: Response) {
        /*
            #swagger.tags = ["Post"];
            #swagger.description = "Endpoints para listar o feed de posts do mais recente para o mais antigo";

            #swagger.responses[200] = { schema: { data: [{$ref: "#/definitions/Post" }], status: 200 } }
            #swagger.responses[500] = {schema: { $ref: "#/definitions/Error500" }}

        */
        try {
            const service = new PostService();

            const result: IResult<IPost[]> = await service.list();

            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao listar posts", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async like(req: Request, res: Response) {
        /* 
            #swagger.tags = ["Post"];
            #swagger.description = "Endpoints para curtir/descurtir um post";
            
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'Post ID.',
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
                description: "Post não encontrado", 
                schema: { errors: ["Post não encontrado"], status: 404 } 
            }
            #swagger.responses[422] = { description:"Erro de Validação", schema: {$ref: "#/definitions/IdValidator"} }
            #swagger.responses[500] ={schema: { $ref: "#/definitions/Error500" }}

        */

        try {
            const service = new PostService();
            const userAuth: any = req.query.userAuth;
            if (req.params.userId !== userAuth._id) {
                return res.status(401).json({ errors: ["Você não tem permissão para dar like para outro usuário"] });
            }
            const result: IResult<Boolean> = await service.like(req.params.id, req.params.userId);

            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao dar like", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async addComment(req: Request, res: Response) {
        /* 
            #swagger.tags = ["Post"];
            #swagger.description = "Endpoints para incluir um comentário de um post";
            
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'Post ID.',
                required: true,
                type: 'ObjectId'
            }

            #swagger.parameters[] = { 
                in: 'body',
                description: 'Informações do comentário',
                schema: { $ref: "#/definitions/AddComment"}
            }

            #swagger.responses[200] = { schema: {errors:[], data: true, status: 200 }}
            #swagger.responses[404] = {
                description: "Post não encontrado", 
                schema: { errors: ["Post não encontrado"], status: 404 } 
            }
            #swagger.responses[422] = { description:"Erro de Validação", schema: {$ref: "#/definitions/PostValidator"} }
            #swagger.responses[500] ={schema: { $ref: "#/definitions/Error500" }}

        */
        try {
            const id = req.params.id;
            const data: IComent = req.body;
            const userAuth: any = req.query.userAuth;
            if (data.author !== userAuth._id) {
                return res.status(401).json({ errors: ["Você não tem permissão para comentar como outro usuário"] });
            }
            const service = new PostService();
            const result: IResult<Boolean> = await service.addComment(id, data);

            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao adicionar comentário", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async removeComment(req: Request, res: Response) {
        /* 
            #swagger.tags = ["Post"];
            #swagger.description = "Endpoints para remover um comentário de um post";
            
            #swagger.parameters['id'] = {
                in: 'path',
                description: 'Post ID.',
                required: true,
                type: 'ObjectId'
            }

             #swagger.parameters['commentId'] = {
                in: 'path',
                description: 'Comentário ID.',
                required: true,
                type: 'ObjectId'
            }

            #swagger.responses[200] = { schema: {errors:[], data: true, status: 200 }}
            #swagger.responses[404] = {
                description: "Post ou comentário não encontrado", 
                schema: { errors: ["Post ou comentário não encontrado"], status: 404 } 
            }
            #swagger.responses[422] = { description:"Erro de Validação", schema: {$ref: "#/definitions/IdValidator"} }
            #swagger.responses[500] ={schema: { $ref: "#/definitions/Error500" }}

        */

        try {
            const service = new PostService();

            const result: IResult<Boolean> = await service.removeComment(req.params.id, req.params.commentId);

            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            Logger.error("Erro ao remover o comentário", error);
            return res.status(500).json({ errors: [error.message] });
        }
    }
}

export const post = new PostController();
