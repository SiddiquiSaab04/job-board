"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const jobs_1 = require("./jobs");
const router = (0, express_1.Router)();
exports.router = router;
router.use("/jobs", jobs_1.jobRouter);
