"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllJobs = void 0;
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
