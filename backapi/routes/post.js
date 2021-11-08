const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController')

router.post('/', postController.crearPost);
router.get('/', postController.verPost);
router.put('/:id', postController.actualizarPost);
router.get('/:id', postController.obtenerPost);
router.delete('/:id', postController.eliminarPost);

module.exports = router;