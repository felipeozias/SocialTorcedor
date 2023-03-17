import { check } from "express-validator";

export default function postValidator() {
    return [
        check("author").isMongoId().withMessage("O código do autor deve ser um ObjectId válido."),
        check("content")
            .trim()
            .escape()
            .notEmpty()
            .isString()
            .withMessage("O conteúdo deve ser uma string.")
            .isLength({ max: 2500 })
            .withMessage("O conteúdo deve ter no máximo 2500 caracteres."),
    ];
}
