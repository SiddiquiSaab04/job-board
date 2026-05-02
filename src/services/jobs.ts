import { Request, Response } from "express";
import JobModel from "../models/jobs";
import { paginate } from "../utils/paginate";
import { CreateJobSchema } from "../validations/jobs";
import type { Job } from "../types/Job";

export const getAllJobsService = async (req: Request, res: Response) => {
  try {
    const { skip, limit, page, search, sort } = paginate(req);
    const jobs = await JobModel.find({})
      .or([
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
        { salary: { $regex: search } },
      ])
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });
    const total = await JobModel.countDocuments();
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

export const createJobService = async (data: CreateJobSchema) => {
  const job = await JobModel.create(data as unknown as Job);
  return job;   
};

export const updateJobService = async (id: string, data: CreateJobSchema) => {
  const job = await JobModel.findByIdAndUpdate(id, data, { new: true });
  if(!job){
    throw new Error("Job not found");
  }
  return job;
};

export const deleteJobService = async (id: string) => {
  const job = await JobModel.findByIdAndDelete(id);
  if(!job){
    throw new Error("Job not found");
  }
  return job;
};
