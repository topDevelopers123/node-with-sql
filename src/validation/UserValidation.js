const Joi = require("joi")

const userValidationSchema = Joi.object({
    firstname: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    age: Joi.number().integer().min(5).required(),
    mobile: Joi.number().integer().required(),
    isActive: Joi.boolean().default(true)

})

module.exports = { userValidationSchema }