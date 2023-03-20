import { Request, Response } from "express";

import { io } from "../server";

class TesteController {
    async teste(req: Request, res: Response) {
        const msg = req.body.message;

        io.pubFeed("add", "teste", msg);

        res.status(200).json({ message: `Mensagem enviada` });
    }
}

export const test = new TesteController();
