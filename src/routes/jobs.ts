import { Router } from "express";
import { getAllJobs } from "../controllers/jobs.controller";

const jobRouter = Router();

jobRouter.get("/", getAllJobs);


export { jobRouter };