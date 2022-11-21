import joi from 'joi';

export const transacaoSchema = joi.object({
    type: joi.string().required(),
    value: joi.number().required(),
    description: joi.string().required()
})
