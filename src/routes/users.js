//  ENRUTADOR USERS //

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const usersController = require('../controllers/usersController');
const loginMiddleware = require('../middlewares/loginMiddleware');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/img/users'));
    },
    filename: function (req, file, cb) {
        cb(null, req.body.email + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })


router.get('/login', usersController.login)

router.get('/productcart', loginMiddleware, usersController.productcart)

router.get('/register', usersController.register)
router.post('/register', upload.single('avatar'), usersController.create)

router.get('/perfil', usersController.perfil)


module.exports = router;