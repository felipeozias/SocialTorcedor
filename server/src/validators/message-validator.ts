import { check } from "express-validator";

export default function messageValidator() {
    return [
        check("author").isMongoId().withMessage("O código do autor deve ser um ObjectId válido."),
        check("message")
            .trim()
            .escape()
            .notEmpty()
            .isString()
            .withMessage("O conteúdo deve ser uma string.")
            .isLength({ max: 100 })
            .withMessage("O conteúdo deve ter no máximo 100 caracteres."),
    ];
}
