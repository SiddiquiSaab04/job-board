"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUserService = exports.createUserService = void 0;
const user_1 = __importDefault(require("../models/user"));
const paginate_1 = require("../utils/paginate");
const createUserService = async (data) => {
    const existingUser = await user_1.default.findOne({ email: data.email });
    if (existingUser) {
        throw new Error("User already exists");
    }
    const user = await user_1.default.create(data);
    return user;
};
exports.createUserService = createUserService;
const getAllUserService = async (req, res) => {
    const { skip, limit, page } = (0, paginate_1.paginate)(req);
    const users = await user_1.default.find({}).skip(skip).limit(limit);
    return res.status(200).json({
        users,
        total: await user_1.default.countDocuments(),
        page,
        limit,
        totalPages: Math.ceil((await user_1.default.countDocuments()) / limit),
    });
};
exports.getAllUserService = getAllUserService;
