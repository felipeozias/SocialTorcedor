import { param } from "express-validator";

export default function idValidator() {
    return [param("id").isMongoId().withMessage("O id deve ser um ObjectId válido.")];
}
