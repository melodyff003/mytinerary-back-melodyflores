import Joi from "joi"

export const createUserSchema = Joi.object({
    email: Joi.string()
        .required()
        .email({
            minDomainSegments: 2
        }),
        password: Joi.string()
            .required()
            .min(6)
            .max(20)
            .alphanum(),
        name: Joi.string()
            .min(3)
            .max(12),
        photo: Joi.string()
            .required()
            .uri()
})