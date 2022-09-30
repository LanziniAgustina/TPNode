const Joi = require('joi')

let crearLibro = Joi.object({
    titulo: Joi.string().required(),
    editorial: Joi.string().required(),
    ISBN: Joi.string().required(),
    coleccion: Joi.string().optional(),
    autor: Joi.string().optional(),
})

module.exports = {
    crearLibro
}