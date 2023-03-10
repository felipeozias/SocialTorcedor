import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import IResult from "../interfaces/iresult";

export default function handleValidation(req: Request, res: Response, next: NextFunction) {
    const validationErrors = validationResult(req);
    if (validationErrors.isEmpty()) {
        return next();
    }

    const errors: string[] = [];
    validationErrors.array().map((err) => errors.push(`[${err.param}]: ${err.msg}`));
    const result: IResult<any> = { errors };
    return res.status(422).json(result);
}
