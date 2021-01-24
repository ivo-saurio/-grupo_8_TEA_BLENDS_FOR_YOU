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
router.post('/login',usersController.processLogin)

//agregar middleware delogin retirada***
router.get('/productcart',  usersController.productcart)

router.get('/register', usersController.register)

router.post('/register', loginMiddleware ,upload.single('avatar'), usersController.create)

router.get('/perfil', usersController.perfil)


module.exports = router;