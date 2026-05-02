"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const jobSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    salary: joi_1.default.number().required(),
    location: joi_1.default.string().required(),
    company: joi_1.default.string().required(),
    createdAt: joi_1.default.date().default(Date.now),
    updatedAt: joi_1.default.date().default(Date.now),
});
exports.default = jobSchema;
