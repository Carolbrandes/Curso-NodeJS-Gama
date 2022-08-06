import {validate, Joi} from 'express-validation'

export const validateCreate = validate({
    // aqui podemos validar tb as QueryTypes, params enviados na rota
    body: Joi.object({
        data_atendimento: Joi.date().required(),
        paciente_id: Joi.number().required(),
        psicolog_id: Joi.number().required(),
        observacao: Joi.string().min(15).required()
    })
})