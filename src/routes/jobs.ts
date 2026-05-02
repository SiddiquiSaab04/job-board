import { Router } from "express";
import { createJob, getAllJobs } from "../controllers/jobs.controller";

const jobRouter = Router();

jobRouter.get("/", getAllJobs);
jobRouter.post("/", createJob);

export { jobRouter };