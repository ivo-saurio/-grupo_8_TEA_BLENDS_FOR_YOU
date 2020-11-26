//  ENRUTADOR MAIN //

//const path = require('path');
const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController')

router.get('/', mainController.index)

router.get('/login', mainController.login)

router.get('/productcart', mainController.productcart)

router.get('/productdetail', mainController.productdetail)

router.get('/register', mainController.register)

router.get('/productadd', mainController.productadd)


module.exports = router;