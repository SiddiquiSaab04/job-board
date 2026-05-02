import { Router } from "express";
import {jobRouter} from "./jobs";
import {userRouter} from "./user";

const router = Router();

router.use("/jobs", jobRouter);
router.use("/users", userRouter);
export {router};