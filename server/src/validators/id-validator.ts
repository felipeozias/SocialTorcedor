import { check } from "express-validator";

export default function idValidator() {
    return [check("id").isMongoId().withMessage("O id deve ser um ObjectId válido.")];
}
