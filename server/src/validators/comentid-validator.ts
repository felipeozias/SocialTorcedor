import { check } from "express-validator";

export default function commentIdValidator() {
    return [check("commentId").isMongoId().withMessage("O id do comentário deve ser um ObjectId válido.")];
}
