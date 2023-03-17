import { Request, Response } from "express";

class FileController {
    get(req: Request, res: Response) {
        const fileName = req.params.file;
        try {
            res.status(200).sendFile(
                __dirname.replace("build/controllers", "uploads/") + fileName
            );
        } catch (err) {
            return res.status(404).json({ error: "Arquivo não encontrado" });
        }
    }
}

export default new FileController();
