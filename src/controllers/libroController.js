const models = require('../database/models/index')
module.exports = {
    getLibro: async (req,res) => {
        const book = await models.libro.findOne({
            where: { cod: req.params.cod}
        })
        res.json({
            success: true,
            data: {
                libro: book
            }
        })
    },

    getLibros: async (req,res) => {
        const books = await models.libro.findAll()
        res.json({
            success: true,
            data: {
                libros: books
            }
        })
    },

    crearLibro: async (req,res) => {
        const book = await models.libro.create(req.body)
        res.json({
            success: true,
            data: {
                book
            }
        })

    },




}