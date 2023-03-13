import { Router, Request, Response } from "express";
import { user } from "../controllers/user-controller";

import handleValidation from "../validators/handle-validation";
import userCreateValidator from "../validators/user-create-validator";
import userUpdateValidator from "../validators/user-update-validator";

export const router = Router();

/*router.get("/", (req: Request, res: Response) => {
    res.send("🔰 Olá, eu sou o servidor ❤");
});*/

router.post("/users", userCreateValidator(), handleValidation, user.create);
router.get("/users/:id", user.getById);
router.get("/users/exists/:nickname", user.exists);
router.get("/users", user.list);
router.post("/users/authenticate", user.authenticate);
router.patch("/users/:id", userUpdateValidator(), handleValidation, user.update);
router.delete("/users/:id", user.remove);
