"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.createUser = void 0;
const users_service_1 = require("../services/users.service");
const user_1 = require("../validations/user");
const fs_1 = __importDefault(require("fs"));
const createUser = async (req, res) => {
    try {
        const body = req.body;
        if (req.file) {
            body.resume = req.file.path;
        }
        const { error } = user_1.createUserValidationSchema.validate(body);
        if (error) {
            if (req.file) {
                fs_1.default.unlinkSync(req.file.path);
            }
            return res.status(400).json({
                success: false,
                message: error.details[0].message,
            });
        }
        const result = await (0, users_service_1.createUserService)(body);
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        if (req.file) {
            fs_1.default.unlinkSync(req.file.path);
        }
        const statusCode = error.message === "User already exists" ? 400 : 500;
        return res.status(statusCode).json({
            success: false,
            message: error.message,
        });
    }
};
exports.createUser = createUser;
const getAllUsers = async (req, res) => {
    try {
        const users = await (0, users_service_1.getAllUserService)();
        return res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: users,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.getAllUsers = getAllUsers;
