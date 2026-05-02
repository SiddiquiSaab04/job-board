import Joi from "joi";
import role from "../enums/role";

export const createUserValidationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().required(),
  city: Joi.string().required(),
  linkedIn: Joi.string().required(),
  github: Joi.string().optional(),
  portfolio: Joi.string().optional(),
  resume: Joi.string().required(),
  role: Joi.string().default(role.USER),
});

export type CreateUserSchema = {
  name: string;
  email: string;
  phoneNumber: string;
  city: string;
  linkedIn: string;
  github?: string;
  portfolio?: string;
  resume: string;
  role?: string;
};
