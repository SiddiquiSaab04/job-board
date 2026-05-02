"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: false,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: false,
    },
    linkedIn: {
        type: String,
        required: false,
    },
    github: {
        type: String,
        required: false,
    },
    portfolio: {
        type: String,
        required: false,
    },
    resume: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
});
exports.default = mongoose_1.default.model("User", userSchema);
