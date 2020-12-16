//enrutador de productos
const express = require('express');
const router = express.Router()

const productosController = require('../controllers/productosController');

// /products (GET)
// Listado de productos
router.get('/', productosController.todo);

// 2. /products/create (GET)
// Formulario de creación de productos
router.get('/create', productosController.create);

// 3. /products/ :id (GET)
// Detalle de un producto particular
router.get('/detalle/:idProducto/:categoria?', productosController.porId);

// 4. /products (POST)
// Acción de creación (a donde se envía el formulario)
router.post('/', productosController.sendcreation);

// 5. /products/ :id /edit (GET)
// Formulario de edición de productos
router.get('/:id/edit', productosController.edit);

// 6. /products/ :id (PUT)
// Acción de edición (a donde se envía el formulario):
router.put('/:id', productosController.sendedit);

// 7. /products/ :id (DELETE)
// Acción de borrado
router.delete('/:id', productosController.delete);

router.get('/productdetail', productosController.productdetail)

router.get('/productadd', productosController.productadd)

module.exports = router;