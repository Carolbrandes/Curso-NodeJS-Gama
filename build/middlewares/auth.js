"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const express_jwt_1 = require("express-jwt");
exports.auth = (0, express_jwt_1.expressjwt)({
    secret: process.env.KEY || "",
    algorithms: ['HS256']
});
