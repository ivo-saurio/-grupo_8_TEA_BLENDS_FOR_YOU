//enrutador de productos
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productosController = require('../controllers/productosController');
//const loginMiddleware = require('../middlewares/loginMiddleware');
//const adminMidleware = require('../middlewares/adminMidleware')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/products'));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })

//router.get('/productdetail',loginMiddleware, productosController.detalle) //loginMiddleware

// 1. /products (GET)
// Listado de productos
router.get('/listado', productosController.listado)
router.get('/catalogo',  productosController.catalogo); //loginMiddleware *AGREGAR DESPUES*
router.get('/cart', productosController.cart);

// 2. /productos/create (GET) Formulario de creación de productos
router.get('/create',  productosController.create); //adminMidleware,

// 4. /productos/create (POST) Acción de creación (a donde se envía el formulario) 
router.post ('/create', upload.single('image'), productosController.productCreate);
// 5. /productos/ :id /edit (GET) Formulario de edición de productos
router.get('/edit/:id', productosController.productEdit); //adminMidleware,
// 6. /productos/ :id (PUT) Acción de edición (a donde se envía el formulario): 
router.post('/edit/:id', upload.any(), productosController.save) //adminMidleware,

// 7. /productos/ :id (DELETE) Acción de borrado
router.delete('/edit/:id', productosController.delete) //adminMidleware,

// 3. /productos/ :id (GET) Detalle de un producto particular
router.get('/:id', productosController.productDetail);

module.exports = router;