const models = require('../database/models/index')
module.exports = {
    getLibro: async (req,res,next) => {
        try {
            const book = await models.libro.findOne({
                where: { cod: req.params.cod},
                include: [{
                    model: models.usuario_libro,
                    include: [{
                        model: models.usuario
                    }]
                }]
            })
            res.json({
                success: true,
                data: {
                    libro: book
                }
            })
        }
        catch (err) {
            return next(err)
        }
    },

    getLibros: async (req,res,next) => {
        try{
            const books = await models.libro.findAll()
            res.json({
                success: true,
                data: {
                    libros: books
                }
            })
        }
        catch (err) {
            return next(err)
        }
    },

    crearLibro: async (req,res,next) => {
        try {
            const book = await models.libro.create(req.body)
            res.json({
                success: true,
                data: {
                    book
                }
            })
        }
        catch (err) {
            return next(err)
        }

    },




}