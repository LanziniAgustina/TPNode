const models = require('../database/models/index')
const errorMsg = require('../const/errorMsg')
const bcrypt = require('bcryptjs')

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
            //si no está registrado
            const registrado = await models.usuario.findOne({
                where: { 
                    email: req.body.email
                }
            })
            if (registrado) {
                return next(errorMsg.EmailRegistrado)
            }

            //encriptamos la contraseña
            user.password = bcrypt.hashSync(user.password, 10) 
            const user = await models.usuario.create(req.body)

            //si existe el libro creamos la relacion
            const libro = await models.libro.findOne({
                where: { cod: req.body.libroCod}
            })
            if (!libro)
                return next(errorMsg.LibroInexistente)
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