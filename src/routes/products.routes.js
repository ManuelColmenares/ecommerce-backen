const {Router} = require('express');
const router = Router();
const controller = require('../controllers/products.controllers')

//GET Catalogo de productos pagina inicio
router.get('/', controller.getProducts);

//GET Solicitud de producto por id
 router.get('/:id', controller.getProduct);

 //POST Crear producto
 router.post('/', controller.createProduct);

 //PUT Actualizar producto
router.put('/:id', controller.updateProduct);

//DELETE Eliminar producto 
router.delete('/:id', controller.deleteProduct);




module.exports = router;
