const express = require('express');
const router = express.Router();

const apiController = require('../../controllers/api/apiController')

//Usuarios
router.get('/users',apiController.usersAll);
router.get('/users/:id',apiController.usersDetail);

router.get('/products',apiController.productAll);
router.get('/products/:id',apiController.productDetail);

router.get('/categorias', apiController.categorias);

module.exports = router;