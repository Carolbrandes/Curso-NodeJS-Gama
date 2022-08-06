"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidate = void 0;
const express_validation_1 = require("express-validation");
exports.loginValidate = (0, express_validation_1.validate)({
    body: express_validation_1.Joi.object({
        email: express_validation_1.Joi.string().email().required(),
        senha: express_validation_1.Joi.string().required()
    })
});
