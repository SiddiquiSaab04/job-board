"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const role_1 = __importDefault(require("../enums/role"));
const CreateUserSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    phoneNumber: joi_1.default.string().required(),
    city: joi_1.default.string().required(),
    linkedIn: joi_1.default.string().required(),
    github: joi_1.default.string().optional(),
    portfolio: joi_1.default.string().optional(),
    resume: joi_1.default.string().required(),
    role: joi_1.default.string().default(role_1.default.USER),
});
