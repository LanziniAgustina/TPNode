const jwt = require('jsonwebtoken')
const globalConst = require('../const/globalConst')

module.exports = function(usuario){
    if (usuario){
        const token = jwt.sign(
            { id: usuario.id },
            globalConst.JWT_SECRET, 
            { expiresIn: '24h'}
        )
        return token
    } else {
        return null
    }
}