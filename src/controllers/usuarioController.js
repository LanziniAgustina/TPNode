module.exports = {

    getUsuario: async (req,res) => {
        res.json({
            message: "Retorna el usuario con el id " + req.params.id 
        })

    },

    crearUsuario: async (req,res) => {
        res.json({
            message: "Crea un usuario con los datos enviados en el body " + req.body.nombre
        })

    },
    
}