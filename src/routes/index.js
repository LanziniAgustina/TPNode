const {Router} = require('express')

const usuarioRoutes = require('./usuarioRoutes')
const libroRoutes = require('./libroRoutes')
const authRoutes = require('./authRoutes')
const decodeJWT = require('../middlewares/decodeJWT')

const routes_init = () => {
    const router = Router()

    router.use("/usuarios", decodeJWT, usuarioRoutes) //metemos el middleware acá porque se quiere restringuir el acceso a todas las rutas
    
    router.use("/libros", decodeJWT, libroRoutes)

    return router
}

const routes_auth = () => {
    const router = Router()
    router.use('/auth', authRoutes)
    return router
}


module.exports = {routes_init, routes_auth}