const router = require("express").Router();
const libroController = require('../controllers/libroController')
const validate = require("../middlewares/validate")
const libroSchema = require("../middlewares/schemas/libroSchema")

router.get('/', libroController.getLibros)
router.get('/:cod', libroController.getLibro)
router.post('/', validate(libroSchema.crearLibro), libroController.crearLibro)

module.exports = router