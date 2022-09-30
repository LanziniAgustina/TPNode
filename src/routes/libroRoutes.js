const router = require("express").Router();

const libroController = require('../controllers/libroController')

router.get('/', libroController.getLibros)
router.get('/:cod', libroController.getLibro)
router.post('/', libroController.crearLibro)

module.exports = router