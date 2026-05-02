import  { Request, Response } from "express";
import UserModel from "../models/user";
import type { User } from "../types/User";
import { paginate } from "../utils/paginate";
const createUserService = async (data: User) => {
  const existingUser = await UserModel.findOne({ email: data.email });
  if (existingUser) {
    throw new Error("User already exists");
  }
  const user = await UserModel.create(data);
  return user;
};

const getAllUserService = async (req: Request, res: Response) => {
  const { skip, limit, page } = paginate(req);
  const users = await UserModel.find({}).skip(skip).limit(limit);
  return res.status(200).json({
    users,
    total: await UserModel.countDocuments(),
    page,
    limit,
    totalPages: Math.ceil((await UserModel.countDocuments()) / limit),
  });
};

export { createUserService, getAllUserService };
