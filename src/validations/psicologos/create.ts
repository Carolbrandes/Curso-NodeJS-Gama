import {validate, Joi}from 'express-validation'

export const validateCreate = validate({
    // aqui podemos validar tb as QueryTypes, params enviados na rota
    body: Joi.object({
        nome: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        senha: Joi.string().min(8).required(),
        apresentacao: Joi.string().min(15).required()
    })
})