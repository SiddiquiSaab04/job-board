import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/users.controller";
import { upload } from "../middlewares/upload";

const userRouter = Router();
userRouter.post("/", upload.single("resume"), createUser);
userRouter.get("/", getAllUsers);

export { userRouter };