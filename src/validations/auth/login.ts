import {validate, Joi}  from 'express-validation'


export const loginValidate = validate({
    body: Joi.object({
        email: Joi.string().email().required(),
        senha: Joi.string().required()
    })
})