"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobRouter = void 0;
const express_1 = require("express");
const jobs_controller_1 = require("../controllers/jobs.controller");
const jobRouter = (0, express_1.Router)();
exports.jobRouter = jobRouter;
jobRouter.get("/", jobs_controller_1.getAllJobs);
