"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const location_1 = __importDefault(require("../enums/location"));
const jobSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        enum: [location_1.default.REMOTE, location_1.default.ON_SITE, location_1.default.HYBRID],
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    postedBy: {
        type: String,
        required: false,
    },
});
const Jobs = mongoose_1.default.model("Jobs", jobSchema);
exports.default = Jobs;
