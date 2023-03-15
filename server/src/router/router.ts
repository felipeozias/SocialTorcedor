import { Router, Request, Response } from "express";
import { post } from "../controllers/post-controller";
import { user } from "../controllers/user-controller";

import handleValidation from "../validators/handle-validation";
import idValidator from "../validators/id-validator";
import postValidator from "../validators/post-validator";
import userCreateValidator from "../validators/user-create-validator";
import userUpdateValidator from "../validators/user-update-validator";

export const router = Router();

router.post("/users", userCreateValidator(), handleValidation, user.create);
router.get("/users/:id", idValidator(), handleValidation, user.get);
router.get("/users/exists/:nickname", user.exists);
router.get("/users", user.list);
router.post("/users/authenticate", user.authenticate);
router.patch("/users/:id", idValidator(), userUpdateValidator(), handleValidation, user.update);
router.delete("/users/:id", user.remove);

router.post("/posts", postValidator(), handleValidation, post.create);
router.delete("/posts/:id", idValidator(), handleValidation, post.remove);
router.get("/posts/:id", idValidator(), handleValidation, post.get);
router.get("/feed", post.list);
router.get("/posts/:id/like/:userId", post.like);
router.post("/posts/:id/comments", postValidator(), handleValidation, post.addComment);
router.delete("/posts/:id/comments/:commentId", post.removeComment);
