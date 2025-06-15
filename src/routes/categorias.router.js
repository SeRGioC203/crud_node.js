const express = require("express");
const router = express.Router();

const controller = require("../controllers/categorias.controller");

//si importa el orden ya que evalua de arriba hacia abajo
router.get('/create', controller.create);
//si no usamos otro elemento que envie a traves de post
//podemos dejar solo barra '/'
router.post('/', controller.store);
router.get('/', controller.index);
router.get('/:id', controller.show);

router.get('/:id/edit', controller.edit);
router.put('/:id', controller.update);

router.delete('/:id', controller.destroy);

module.exports = router;