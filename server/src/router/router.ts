import { Router } from "express";
import { post } from "../controllers/post-controller";
import { user } from "../controllers/user-controller";
import { group } from "../controllers/group-controller";
import { test } from "../controllers/teste-controller";

import handleValidation from "../validators/handle-validation";
import idValidator from "../validators/id-validator";
import postValidator from "../validators/post-validator";
import userCreateValidator from "../validators/user-create-validator";
import userUpdateValidator from "../validators/user-update-validator";
import groupValidator from "../validators/group-validator";
import userIdValidator from "../validators/userid-validator";
import commentIdValidator from "../validators/comentid-validator";
import messageValidator from "../validators/message-validator";

export const router = Router();

router.post("/users", userCreateValidator(), handleValidation, user.create);
router.get("/users/:id", idValidator(), handleValidation, user.get);
router.get("/users/exists/:nickname", user.exists);
router.get("/users", user.list);
router.post("/users/authenticate", user.authenticate);
router.patch("/users/:id", idValidator(), userUpdateValidator(), handleValidation, user.update);
//router.delete("/users/:id", user.remove);

router.post("/posts", postValidator(), handleValidation, post.create);
router.delete("/posts/:id", idValidator(), handleValidation, post.remove);
router.get("/posts/:id", idValidator(), handleValidation, post.get);
router.get("/feed", post.list);
router.get("/posts/:id/like/:userId", idValidator(), userIdValidator(), handleValidation, post.like);
router.post("/posts/:id/comments", idValidator(), postValidator(), handleValidation, post.addComment); //post e comment validator são iguais
router.delete("/posts/:id/comments/:commentId", idValidator(), commentIdValidator(), handleValidation, post.removeComment);

router.post("/groups", groupValidator(), handleValidation, group.create);
router.patch("/groups/:id", idValidator(), groupValidator(), handleValidation, group.update);
router.delete("/groups/:id", idValidator(), handleValidation, group.remove);
router.get("/groups/:id", idValidator(), handleValidation, group.get);
router.get("/groups", group.list);
router.delete("/groups/:id/members/:userId", idValidator(), userIdValidator(), handleValidation, group.removeMember);
router.post("/groups/:id/messages", idValidator(), messageValidator(), handleValidation, group.addMessage);

//router.get("/websocket", test.teste);
