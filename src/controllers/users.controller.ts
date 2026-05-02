import { Request, Response } from "express";
import { createUserService, getAllUserService } from "../services/users.service";
import { createUserValidationSchema } from "../validations/user";

import fs from "fs";

const createUser = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    if (req.file) {
      body.resume = req.file.path;
    }

    const { error } = createUserValidationSchema.validate(body);
    if (error) {
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }
    
    const result = await createUserService(body);
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    const statusCode = error.message === "User already exists" ? 400 : 500;
    return res.status(statusCode).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUserService();
    return res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export { createUser , getAllUsers };
