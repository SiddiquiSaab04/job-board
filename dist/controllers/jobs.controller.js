"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateJob = exports.createJob = exports.getAllJobs = void 0;
const jobs_1 = require("../services/jobs");
const getAllJobs = async (req, res) => {
    try {
        const result = await (0, jobs_1.getAllJobsService)(req, res);
        return result;
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
exports.getAllJobs = getAllJobs;
const createJob = async (req, res) => {
    try {
        const body = req.body;
        const { title, description, salary, location, company, postedBy } = body;
        if (!title || !description || !salary || !location || !company) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }
        else {
            const result = await (0, jobs_1.createJobService)(body);
            return res.status(201).json({
                success: true,
                message: "Job created successfully",
                data: result,
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.createJob = createJob;
const updateJob = async (req, res) => {
    try {
        const body = req.body;
        const { id } = req.params;
        const { title, description, salary, location, company, postedBy } = body;
        if (!title && !description && !salary && !location && !company && !postedBy) {
            return res.status(400).json({
                success: false,
                message: "At least one field is required",
            });
        }
        else {
            const result = await (0, jobs_1.updateJobService)(id, body);
            return res.status(201).json({
                success: true,
                message: "Job updated successfully",
                data: result,
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.updateJob = updateJob;
