"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const users_controller_1 = require("../controllers/users.controller");
const upload_1 = require("../middlewares/upload");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.post("/", upload_1.upload.single("resume"), users_controller_1.createUser);
