import {validate, Joi}from 'express-validation'

export const validateCreate = validate({
    // aqui podemos validar tb as QueryTypes, params enviados na rota
    body: Joi.object({
        nome: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        idade: Joi.date().required()
    })
})