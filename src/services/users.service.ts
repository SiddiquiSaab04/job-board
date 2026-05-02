import UserModel from "../models/user";
import { CreateUserSchema } from "../validations/user";

const createUserService = async (data: CreateUserSchema) => {
  const user = await UserModel.create(data as any);
  return user;
};

export { createUserService };
