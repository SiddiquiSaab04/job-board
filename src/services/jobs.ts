import { Request, Response } from "express";
import Job from "../models/jobs";
import { paginate } from "../utils/paginate";

export const getAllJobsService = async (req: Request, res: Response) => {
    try {
        const {skip, limit, page, search, sort} = paginate(req);
        const jobs = await Job.find({})
        .or([
            {title: {$regex: search, $options: "i"}},
            {description: {$regex: search, $options: "i"}},
            {company: {$regex: search, $options: "i"}},
            {location: {$regex: search, $options: "i"}},
            {jobType: {$regex: search, $options: "i"}},
            {salary: {$regex: search}},
        ])
        .skip(skip).limit(limit).sort({createdAt: -1});
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
