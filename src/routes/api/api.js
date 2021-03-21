const express = require('express');
const router = express.Router();

const apiController = require('../../controllers/api/apiController')

//Usuarios
router.get('/users',apiController.usersAll);
router.get('/users/:id',apiController.usersDetail);



module.exports = router;