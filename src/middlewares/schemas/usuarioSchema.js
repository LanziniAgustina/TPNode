const Joi = require('joi')

let crearUsuario = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().optional(),
    telefono: Joi.number().optional(),
})

module.exports = {
    crearUsuario
}