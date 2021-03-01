//  ENRUTADOR USERS //

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const usersController = require('../controllers/usersController');
const loginMiddleware = require('../middlewares/loginMiddleware');
const loggedMiddleware = require('../middlewares/loggedMiddleware')
const {check, validationResult, body} = require('express-validator');
const { login } = require('../controllers/usersController');
const loginValidator = require('../validations/loginValidator')
const registerValidator = require('../validations/registerValidator')



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/users'));
    },
    filename: function (req, file, cb) {
        cb(null, req.body.email + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })

//RUTA PARA EL LOGIN
router.get('/login', loginMiddleware, usersController.login)
router.post('/login',loginValidator,usersController.processLogin)
router.get('/logOut',usersController.logOut);

//RUTA CARRITO DE COMPRAS
router.get('/productcart', loggedMiddleware, usersController.productcart)

//RUTA PARA REGISTRARSE
router.get('/register', loginMiddleware, usersController.register)
router.post('/register',upload.single('avatar'), registerValidator,usersController.create)

//IR A MI PERFIL
router.get('/perfil/:id', usersController.perfil)

//EDITAR PERFIL
router.get('/perfil/:id/edit', usersController.perfilEditar)
router.post('/perfil/:id/edit', upload.single('avatar'),registerValidator,usersController.perfilEditado)



module.exports = router;