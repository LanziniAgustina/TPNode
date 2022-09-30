const router = require("express").Router();

const usuarioController = require('../controllers/usuarioController')
router.get('/', usuarioController.getUsuarios)
router.get('/:id', usuarioController.getUsuario)
router.post('/', usuarioController.crearUsuario)


module.exports = router