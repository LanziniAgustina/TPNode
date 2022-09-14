module.exports = {

    getLibros: async (req,res) => {
        res.json({
            message: "Retorna la lista con todos los libros disponibles."
        })

    },


}