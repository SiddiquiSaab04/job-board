"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = void 0;
const user_1 = __importDefault(require("../models/user"));
const createUserService = async (data) => {
    const user = await user_1.default.create(data);
    return user;
};
exports.createUserService = createUserService;
