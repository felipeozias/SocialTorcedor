import { check } from "express-validator";

export default function groupValidator() {
    return [
        check("admin").isMongoId().withMessage("O código do administrador deve ser um ObjectId válido."),
        check("title")
            .trim()
            .notEmpty()
            .withMessage("O nome do grupo é obrigatório.")
            .escape()
            .isString()
            .withMessage("O nome do grupo deve ser uma string.")
            .isLength({ min: 5, max: 50 })
            .withMessage("O nome do grupo deve ter entre 5 e 50 caracteres."),
        check("members.*").isMongoId().withMessage("Os códigos dos membros devem ser ObjectIds válidos."),
    ];
}
