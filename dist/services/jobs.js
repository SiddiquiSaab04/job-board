"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllJobsService = void 0;
const jobs_1 = __importDefault(require("../models/jobs"));
const paginate_1 = require("../utils/paginate");
const getAllJobsService = async (req, res) => {
    try {
        const { skip, limit, page } = (0, paginate_1.paginate)(req);
        const jobs = await jobs_1.default.find().skip(skip).limit(limit);
        const total = await jobs_1.default.countDocuments();
        return res.status(200).json({
            success: true,
            message: "Jobs fetched successfully",
            data: jobs,
            total: total,
            page: page,
            limit: limit,
            totalPages: Math.ceil(total / limit),
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
exports.getAllJobsService = getAllJobsService;
