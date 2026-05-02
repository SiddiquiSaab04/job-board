"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = void 0;
const paginate = (req) => {
    const search = req.query.search || "";
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    return { search, skip, limit, page };
};
exports.paginate = paginate;
