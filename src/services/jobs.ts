import { Request, Response } from "express";
import Job from "../models/jobs";

export const getAllJobsService = async (req: Request, res: Response) => {
    try {
        const jobs = await Job.find();
        return res.status(200).json({
            success: true,
            message:"Jobs fetched successfully",
            data: jobs,
            total: jobs.length
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
