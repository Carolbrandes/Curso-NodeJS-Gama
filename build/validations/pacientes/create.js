"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreate = void 0;
const express_validation_1 = require("express-validation");
exports.validateCreate = (0, express_validation_1.validate)({
    // aqui podemos validar tb as QueryTypes, params enviados na rota
    body: express_validation_1.Joi.object({
        nome: express_validation_1.Joi.string().min(3).required(),
        email: express_validation_1.Joi.string().email().required(),
        idade: express_validation_1.Joi.date().required()
    })
});
