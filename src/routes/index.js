const {Router} = require('express')

const usuarioRoutes = require('./usuarioRoutes')
const libroRoutes = require('./libroRoutes')

const routes_init = () => {
    const router = Router()

    router.use("/usuarios", usuarioRoutes)
    
    router.use("/libros", libroRoutes)

    return router
}

module.exports = {routes_init}