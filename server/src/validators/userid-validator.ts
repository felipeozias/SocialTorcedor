import { check } from "express-validator";

export default function userIdValidator() {
    return [check("userId").isMongoId().withMessage("O id do usuário deve ser um ObjectId válido.")];
}
