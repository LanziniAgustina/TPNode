const models = require('../database/models/index')
const errorMsg = require('../const/errorMsg')

module.exports = {

    getUsuario: async (req,res, next) => {
        try {
            const user = await models.usuario.findOne({
                where: { id: req.params.id}
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