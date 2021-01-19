//enrutador de productos
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const productosController = require('../controllers/productosController');
const loginMiddleware = require('../middlewares/loginMiddleware');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/img'));
    },
    filename: function (req, file, cb) {
        cb(null, req.body.descripcion + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })

//router.get('/productdetail',loginMiddleware, productosController.detalle) //loginMiddleware

// 1. /products (GET)
// Listado de productos
router.get('/catalogo',  productosController.listado); //loginMiddleware *AGREGAR DESPUES*


// 5. /products/ :id /edit (GET)
// Formulario de edición de productos
router.get('/:id/edit', productosController.edit);

// 2. /products/create (GET)
// Formulario de creación de productos
router.get('/create', productosController.create);

// 3. /products/ :id (GET)
// Detalle de un producto particular
router.get('/:idProducto/:categoria?', productosController.porId);

// 4. /products (POST)
// Acción de creación (a donde se envía el formulario)
router.post('/create', upload.single('img'), productosController.sendcreation);


// 6. /products/ :id (PUT)
// Acción de edición (a donde se envía el formulario):
router.put('/:id/', productosController.sendedit);

// 7. /products/ :id (DELETE)
// Acción de borrado
router.delete('/:id', productosController.delete);



module.exports = router;