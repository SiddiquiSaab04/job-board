import { Router } from "express";
import { updateJob, createJob, getAllJobs } from "../controllers/jobs.controller";

const jobRouter = Router();

jobRouter.get("/", getAllJobs);
jobRouter.post("/", createJob);
jobRouter.put("/:id", updateJob);
export { jobRouter };