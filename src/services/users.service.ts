import UserModel from "../models/user";
import type { User } from "../types/User";
const createUserService = async (data: User) => {
  const existingUser = await UserModel.findOne({ email: data.email });
  if (existingUser) {
    throw new Error("User already exists");
  }
  const user = await UserModel.create(data);
  return user;
};

const getAllUserService = async () => {
  const users = await UserModel.find({});
  return users;
};

export { createUserService, getAllUserService };
