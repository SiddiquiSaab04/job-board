import Joi from "joi";

const jobSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  salary: Joi.number().required(),
  location: Joi.string().required(),
  company: Joi.string().required(),
  createdAt: Joi.date().default(Date.now),
  updatedAt: Joi.date().default(Date.now),
});

const getJobSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  salary: Joi.number().required(),
  location: Joi.string().required(),
  company: Joi.string().required(),
  postedBy: Joi.string().optional(),
});

export type CreateJobSchema = typeof jobSchema;
export type GetJobSchema = typeof getJobSchema;
