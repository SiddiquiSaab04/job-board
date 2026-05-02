"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const users_service_1 = require("../services/users.service");
const createUser = async (req, res) => {
    try {
        const body = req.body;
        const { name, email, password, phoneNumber, city, linkedIn, github, portfolio, resume, role } = body;
        const result = await (0, users_service_1.createUserService)(body);
        if (!result) {
            return res.status(400).json({
                success: false,
                message: "User creation failed",
            });
        }
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: result,
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
exports.createUser = createUser;
