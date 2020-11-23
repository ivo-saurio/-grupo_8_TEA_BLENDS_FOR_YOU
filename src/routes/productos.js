//enrutador de productos
const express = require('express');
const router = express.Router()

const productosController = require('../controllers/productosController');

router.get('/', productosController.todo);

module.exports = router;