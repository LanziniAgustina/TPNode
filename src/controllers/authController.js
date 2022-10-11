const models = require('../database/models/index')
const errorMsg = require('../const/errorMsg')
const bcrypt = require('bcryptjs')
const signJWT = require('../middlewares/signJWT')

module.exports = {

    login: async (req,res,next) => {
        const user = await models.usuario.findOne({
            where: { 
                email: req.body.email
            }
        })
        var valid = false
        if (user){
            valid = bcrypt.compareSync(req.body.password, user.password)
        }
        if (!valid){
            return next(errorMsg.CredencialInvalida)
        }

        res.json({
            success: true,
            data: {
                token: signJWT(user),
                id: user.id,
                nombre: user.nombre,
                apellido: user.apellido,
                email: user.email
            }
        })

    },

    registrarse: async (req,res,next) => {
        try {
            const registrado = await models.usuario.findOne({
                where: { 
                    email: req.body.email
                }
            })
            if (registrado) {
                return next(errorMsg.EmailRegistrado)
            }
            req.body.password = bcrypt.hashSync(req.body.password, 10)
            const user = await models.usuario.create(req.body)
            
            res.json({
                success: true,
                data: {
                    id: user.id
                }
            })
        }
        catch (err){
            return next(err)
        }

    },
    
}