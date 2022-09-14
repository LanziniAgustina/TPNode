const router = require("express").Router();

const libroController = require('../controllers/libroController')

router.get('/', libroController.getLibros)

module.exports = router