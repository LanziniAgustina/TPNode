const models = require('../database/models/index')
module.exports = {

    getUsuario: async (req,res) => {
        const user = await models.usuario.findOne({
            where: { id: req.params.id}
        })
        res.json({
            success: true,
            data: {
                usuario: user
            }
        })

    },

    getUsuarios: async (req,res) => {
        const users = await models.usuario.findAll()
        res.json({
            success: true,
            data: {
                usuarios: users
            }
        })

    },

    crearUsuario: async (req,res) => {
        const user = await models.usuario.create(req.body)
        res.json({
            success: true,
            data: {
                user
            }
        })

    },
    
}