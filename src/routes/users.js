//  ENRUTADOR USERS //

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid'); //generador de nombres unicos para archivos
const usersController = require('../controllers/usersController');
const loginMiddleware = require('../middlewares/loginMiddleware');
const loggedMiddleware = require('../middlewares/loggedMiddleware')
const {check, validationResult, body} = require('express-validator');
const { login } = require('../controllers/usersController');



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/users'));
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })

//RUTA AL LOGIN
router.get('/login', loginMiddleware, usersController.login)

//RUTA PARA GUARDAR UN LOGIN
router.post('/login',usersController.processLogin)

//agregar middleware delogin retirada***
router.get('/productcart', loggedMiddleware, usersController.productcart)

router.get('/register', loginMiddleware, usersController.register)
router.post('/register', upload.single('avatar'), usersController.create)

//IR A MI PERFIL
router.get('/perfil/:id', loginMiddleware, loginMiddleware, usersController.perfil)

//EDITAR PERFIL
router.get('/perfil/:id/edit', usersController.perfilEditar)
router.put('/perfil/:id/edit', usersController.perfilEditado)



module.exports = router;