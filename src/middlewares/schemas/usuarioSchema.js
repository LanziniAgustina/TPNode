const Joi = require('joi')

let crearUsuario = Joi.object({
    password: Joi.string().required(),
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().optional(),
    telefono: Joi.number().optional(),
    libroCod: Joi.number().optional(),
})

module.exports = {
    crearUsuario
}