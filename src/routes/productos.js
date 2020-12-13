//enrutador de productos
const express = require('express');
const router = express.Router()

const productosController = require('../controllers/productosController');

router.get('/', productosController.todo);

router.get('/productdetail', productosController.productdetail)

router.get('/productadd', productosController.productadd)

module.exports = router;