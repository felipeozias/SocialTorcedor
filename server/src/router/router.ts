import { Router } from "express";
import { post } from "../controllers/post-controller";
import { user } from "../controllers/user-controller";
import file from "../controllers/file-controllers";
import Auth from "../auth/auth";
import { group } from "../controllers/group-controller";
import { test } from "../controllers/teste-controller";

import handleValidation from "../validators/handle-validation";
import idValidator from "../validators/id-validator";
import postValidator from "../validators/post-validator";
import userCreateValidator from "../validators/user-create-validator";
import userUpdateValidator from "../validators/user-update-validator";
import Storage from "../storage/storage";
import groupValidator from "../validators/group-validator";
import userIdValidator from "../validators/userid-validator";
import commentIdValidator from "../validators/comentid-validator";
import messageValidator from "../validators/message-validator";

export const router = Router();

router.post("/users", userCreateValidator(), handleValidation, user.create);
router.post("/users/authenticate", Auth.authLogin, user.authenticate);
router.get("/users/exists/:nickname", user.exists);

//router.get("/files/:file", file.get);
router.delete("/users/logout", Auth.verifyAuth, Auth.logout);
router.get("/users/me", Auth.verifyAuth, user.getMe);
router.get("/users/:id", Auth.verifyAuth, idValidator(), handleValidation, user.get);
router.get("/users", Auth.verifyAuth, user.list);

router.patch("/users/:id", Auth.verifyAuth, Storage.upload, idValidator(), userUpdateValidator(), handleValidation, user.update);
router.delete("/users/:id", Auth.verifyAuth, user.remove);
router.post("/posts", Auth.verifyAuth, Storage.upload, postValidator(), handleValidation, post.create);
router.delete("/posts/:id", Auth.verifyAuth, idValidator(), handleValidation, post.remove);
router.get("/posts/:id", Auth.verifyAuth, idValidator(), handleValidation, post.get);
router.get("/feed", Auth.verifyAuth, post.list);
router.get("/posts/:id/like/:userId", Auth.verifyAuth, post.like);
router.post("/posts/:id/comments", Auth.verifyAuth, postValidator(), handleValidation, post.addComment);
router.delete("/posts/:id/comments/:commentId", Auth.verifyAuth, post.removeComment);

router.post("/groups", Auth.verifyAuth, Storage.upload, groupValidator(), handleValidation, group.create);
router.patch("/groups/:id", Auth.verifyAuth, idValidator(), groupValidator(), handleValidation, group.update);
router.delete("/groups/:id", Auth.verifyAuth, idValidator(), handleValidation, group.remove);
router.get("/groups/:id", Auth.verifyAuth, idValidator(), handleValidation, group.get);
router.get("/groups", Auth.verifyAuth, group.list);
router.delete("/groups/:id/members/:userId", Auth.verifyAuth, idValidator(), userIdValidator(), handleValidation, group.removeMember);
router.post("/groups/:id/messages", Auth.verifyAuth, idValidator(), messageValidator(), handleValidation, group.addMessage);

//router.get("/websocket", test.teste);

router.get("/", (req, res) => {
    res.redirect("/docs");
});
