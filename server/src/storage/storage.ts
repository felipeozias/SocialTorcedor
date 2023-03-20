import multer from "multer";
import { Types } from "mongoose";
import { NextFunction, Request, Response } from "express";
import path from "path";

export default class Storage {
    static upload(req: Request, res: Response, next: NextFunction) {
        /// Só é permitido 1 arquivo de no maximo 5MB
        const limits = {
            files: 1,
            fileSize: 5 * 1024 * 1024,
        };
        const _id = !req.params.id ? new Types.ObjectId() : req.params.id;
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, "uploads/");
            },
            filename: (req, file, cb) => {
                const fileExtension = file.originalname.split(".")[1];
                const newFileName = _id;

                cb(null, `${newFileName}.${fileExtension}`);
            },
        });

        const messageError =
            "Apenas arquivos [.jpg, .jpeg, .png] são permitidos";

        /// Somente é permitido as extensões [.jpg, .jpeg, .png]
        const upload = multer({
            storage,
            limits,
            fileFilter: (req, file, cb) => {
                const ext = path.extname(file.originalname).toLowerCase();
                const allowedExts = [".jpg", ".jpeg", ".png"];
                if (allowedExts.includes(ext)) {
                    return cb(null, true);
                }
                return cb(new Error(messageError));
            },
        });

        upload.single("photo")(req, res, (err: any) => {
            if (err instanceof multer.MulterError) {
                if (err.code === "LIMIT_FILE_SIZE") {
                    return res
                        .status(400)
                        .json({ message: "Arquivo muito grande" });
                }
            } else if (err) {
                return err.message === messageError
                    ? res.status(400).json({ message: err.message })
                    : res
                          .status(500)
                          .json({ message: "Erro ao fazer upload do arquivo" });
            }

            req.body._id = _id ? _id : null;
            req.body.pathImage = req.file?.filename;

            next();
        });
    }
}
