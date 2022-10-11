const jwt = require('jsonwebtoken')
const errorMsg = require('../const/errorMsg')
const models = require('../database/models/index')
const moment = require('moment')
const globalConst = require('../const/globalConst')

module.exports = async function(req,res,next){
    //si recibo token
    if (req.header('Authorization') && req.header('Authorization').split(' ').length > 1){
        try {
            //decodifico con la clave secreta para obtener los datos y me guardo el payload (formato del token: header.payload.signature)
            let data = jwt.verify(req.header('Authorization').split(' ')[1], globalConst.JWT_SECRET)

            //verifico que no haya expirado
            // console.log("Token exp : " + data.exp + " y moment " +)
            if (data.exp <= moment().unix())
                return next(errorMsg.SesionExpirada)

            res.locals.token = data

            //busco usuario en DB
            const usuario = await models.usuario.findOne({
                where: {
                    id: data.id
                }
            })
            if (!usuario)
                return next(errorMsg.UsuarioNoAutorizado)

            res.locals.usuario = usuario

            next() //paso al siguiente middleware o controller
        }
        catch(err){
            return next(errorMsg.SesionExpirada)
        }
    }
    else {
        return next(errorMsg.UsuarioNoAutorizado)
    }
}