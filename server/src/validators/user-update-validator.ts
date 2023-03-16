import { check } from "express-validator";

export default function userUpdateValidator() {
    return [
        check("nickname")
            .trim()
            .isString()
            .toLowerCase()
            .isLength({ min: 5, max: 25 })
            .withMessage("O apelido deve ter entre 5 e 25 caracteres")
            .matches(/^[a-z][a-z0-9-_@.]*[a-z0-9]+$/)
            .withMessage("O apelido deve começar com letra pode conter números e não pode terminar com caracteres especiais."),
        check("name")
            .trim()
            .isString()
            .isLength({ min: 5, max: 30 })
            .withMessage("O nome deve ter entre 5 e 50 caracteres.")
            .matches(/^[a-zA-Zà-úÀ-Ú ]+$/)
            .withMessage("O nome deve conter apenas letras."),
        check("team").trim().escape().notEmpty().withMessage("O time é obrigatório.").isString().withMessage("O Time deve ser uma string."),
    ];
}
