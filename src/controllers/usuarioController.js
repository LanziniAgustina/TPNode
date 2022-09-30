const models = require('../database/models/index')
const errorMsg = require('../const/errorMsg')

module.exports = {

    getUsuario: async (req,res, next) => {
        try {
            const user = await models.usuario.findOne({
                where: { id: req.params.id},
                include: [{
                    model: models.usuario_libro,
                    include: [{
                        model: models.libro
                    }]
                }]
            })
            if (!user){
                return next(errorMsg.UsuarioInexistente)
            }
            res.json({
                success: true,
                data: {
                    usuario: user
                }
            })
        }
        catch (err) {
            return next(err)
        }

    },

    getUsuarios: async (req,res,next) => {
        try {
            const users = await models.usuario.findAll()
            res.json({
                success: true,
                data: {
                    usuarios: users
                }
            })
        } 
        catch (err) {
            return next(err)
        }

    },

    crearUsuario: async (req,res,next) => {
        try {
            const user = await models.usuario.create(req.body)

            const relacion = await models.usuario_libro.create({
                usuarioId: user.id,
                libroCod: req.body.libroCod
            })

            res.json({
                success: true,
                data: {
                    user
                }
            })
        }
        catch (err) {
            return next(err)
        }
    },
    
}