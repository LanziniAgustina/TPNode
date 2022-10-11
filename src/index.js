const express = require('express')
const globalConst = require('./const/globalConst')
const routerConfig = require('./routes/index')
const errorHandler = require('./middlewares/error')
let createError = require('http-errors')

const init = () => {
    const app = express()
    
    //configracion de la API
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))

    //config rutas de autenticacion
    app.use('/', routerConfig.routes_auth())
    //configuracion de router interno
    app.use('/api/', routerConfig.routes_init())
    app.use(function (req,res,next){
        next(createError(404)) //si no encuentra ruta tonce da 404
    })
    app.use(errorHandler)
    app.listen(globalConst.PORT)
    console.log("Escuchando en el port " + globalConst.PORT)

}

init()