const express = require('express')
const globalConst = require('./const/globalConst')
const routerConfig = require('./routes/index')

const init = () => {
    const app = express()
    
    //configracion de la API
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))

    //configuracion de routers
    app.use('/api/', routerConfig.routes_init())

    app.listen(globalConst.PORT)
    console.log("Escuchando en el port " + globalConst.PORT)
}

init()