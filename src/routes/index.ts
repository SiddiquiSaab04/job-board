import { Router } from "express";
import {jobRouter} from "./jobs";

const router = Router();

router.use("/jobs", jobRouter);

export {router};