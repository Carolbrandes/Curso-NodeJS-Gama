"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreate = void 0;
const express_validation_1 = require("express-validation");
exports.validateCreate = (0, express_validation_1.validate)({
    // aqui podemos validar tb as QueryTypes, params enviados na rota
    body: express_validation_1.Joi.object({
        data_atendimento: express_validation_1.Joi.date().required(),
        paciente_id: express_validation_1.Joi.number().required(),
        psicolog_id: express_validation_1.Joi.number().required(),
        observacao: express_validation_1.Joi.string().min(15).required()
    })
});
