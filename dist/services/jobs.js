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
        const { skip, limit, page, search, sort } = (0, paginate_1.paginate)(req);
        const jobs = await jobs_1.default.find({})
            .or([
            { title: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } },
            { company: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } },
            { jobType: { $regex: search, $options: "i" } },
            { salary: { $regex: search } },
        ])
            .skip(skip).limit(limit).sort({ createdAt: -1 });
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
