const router = require("express").Router();
const usuarioController = require('../controllers/usuarioController')
const validate = require("../middlewares/validate")
const usuarioSchema = require("../middlewares/schemas/usuarioSchema")

router.get('/', usuarioController.getUsuarios)
router.get('/:id', usuarioController.getUsuario)
router.post('/', validate(usuarioSchema.crearUsuario), usuarioController.crearUsuario)


module.exports = router