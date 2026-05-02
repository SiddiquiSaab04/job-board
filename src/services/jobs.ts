import { Request, Response } from "express";
import Job from "../models/jobs";
import { paginate } from "../utils/paginate";

export const getAllJobsService = async (req: Request, res: Response) => {
    try {
        const {skip, limit, page} = paginate(req);
        const jobs = await Job.find().skip(skip).limit(limit);
        const total = await Job.countDocuments();
        return res.status(200).json({
            success: true,
            message: "Jobs fetched successfully",
            data: jobs,
            total: total,
            page: page,
            limit: limit,
            totalPages: Math.ceil(total / limit),
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
