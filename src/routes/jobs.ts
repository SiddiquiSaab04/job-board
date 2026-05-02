import { Router } from "express";
import { createJob, getAllJobs , updateJob, deleteJob } from "../controllers/jobs.controller";

const jobRouter = Router();

jobRouter.get("/", getAllJobs);
jobRouter.post("/", createJob);
jobRouter.put("/:id", updateJob);
jobRouter.delete("/:id", deleteJob);

export { jobRouter };