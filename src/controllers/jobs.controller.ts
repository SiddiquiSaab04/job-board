import Job from "../models/jobs";
import { Request, Response } from "express";
import { getAllJobsService } from "../services/jobs";

const getAllJobs = async (req: Request, res: Response) => {
    try {
        const result = await getAllJobsService(req, res);
        return result;
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export {
    getAllJobs
}