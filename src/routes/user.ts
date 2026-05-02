import { Router } from "express";
import { createUser } from "../controllers/users.controller";
import { upload } from "../middlewares/upload";

const userRouter = Router();
userRouter.post("/", upload.single("resume"), createUser);

export { userRouter };