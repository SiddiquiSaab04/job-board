import { Request, Response } from "express";
import {
  createJobService,
  getAllJobsService,
  updateJobService,
  deleteJobService,
} from "../services/jobs.service";

const createJob = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { title, description, salary, location, company, postedBy } = body;
    if (!title || !description || !salary || !location || !company) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    } else {
      const result = await createJobService(body);
      return res.status(201).json({
        success: true,
        message: "Job created successfully",
        data: result,
      });
    }
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

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

const updateJob = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const { title, description, salary, location, company, postedBy } = body;
    if (
      !title &&
      !description &&
      !salary &&
      !location &&
      !company &&
      !postedBy
    ) {
      return res.status(400).json({
        success: false,
        message: "At least one field is required",
      });
    } else {
      const result = await updateJobService(id as string, body);
      return res.status(201).json({
        success: true,
        message: "Job updated successfully",
        data: result,
      });
    }
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteJob = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await deleteJobService(id as string);
    return res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { getAllJobs, createJob, updateJob, deleteJob };
