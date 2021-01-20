//  ENRUTADOR USERS //

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const usersController = require('../controllers/usersController');
const loginMiddleware = require('../middlewares/loginMiddleware');
const {check, validationResult, body} = require('express-validator')



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/img/users'));
    },
    filename: function (req, file, cb) {
        cb(null, req.body.email + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })

//RUTA AL LOGIN
router.get('/login', usersController.login)

//RUTA PARA GUARDAR UN LOGIN
router.post('/login',[
    check('email').isEmail().withMessage('Email Invalido'),
    check('password').isLength({min:8}).withMessage('La contraseña debe tener minimo de 8 caracteres'),
],usersController.processLogin)

router.get('/productcart', loginMiddleware, usersController.productcart)

router.get('/register', usersController.register)

router.post('/register', loginMiddleware ,upload.single('avatar'), usersController.create)

router.get('/perfil', usersController.perfil)


module.exports = router;