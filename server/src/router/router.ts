import { Router, Request, Response } from "express";
import { post } from "../controllers/post-controller";
import { user } from "../controllers/user-controller";
import file from "../controllers/file-controllers";
import Auth from "../auth/auth";

import handleValidation from "../validators/handle-validation";
import idValidator from "../validators/id-validator";
import postValidator from "../validators/post-validator";
import userCreateValidator from "../validators/user-create-validator";
import userUpdateValidator from "../validators/user-update-validator";
import Storage from "../storage/storage";

export const router = Router();

router.post("/users", userCreateValidator(), handleValidation, user.create);
router.post("/users/authenticate", Auth.authLogin, user.authenticate);
router.get("/users/exists/:nickname", user.exists);

router.get("/files/:file", file.get);
router.delete("/users/logout", Auth.verifyAuth, Auth.logout);
router.get("/user/me", Auth.verifyAuth, user.getMe);
router.get(
    "/users/:id",
    Auth.verifyAuth,
    idValidator(),
    handleValidation,
    user.get
);
router.get("/users", Auth.verifyAuth, user.list);

router.patch(
    "/users/:id",
    Auth.verifyAuth,
    Storage.upload,
    idValidator(),
    userUpdateValidator(),
    handleValidation,
    user.update
);
router.delete("/users/:id", Auth.verifyAuth, user.remove);
router.post(
    "/posts",
    Storage.upload,
    postValidator(),
    handleValidation,
    post.create
);
router.delete(
    "/posts/:id",
    Auth.verifyAuth,
    idValidator(),
    handleValidation,
    post.remove
);
router.get(
    "/posts/:id",
    Auth.verifyAuth,
    idValidator(),
    handleValidation,
    post.get
);
router.get("/feed", Auth.verifyAuth, post.list);
router.get("/posts/:id/like/:userId", Auth.verifyAuth, post.like);
router.post(
    "/posts/:id/comments",
    Auth.verifyAuth,
    postValidator(),
    handleValidation,
    post.addComment
);
router.delete(
    "/posts/:id/comments/:commentId",
    Auth.verifyAuth,
    post.removeComment
);
