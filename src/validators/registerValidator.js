const {check, validationResult, body} = require('express-validator');

module.exports = [
    check('name')
        .isLength({min:2, max:20})
        .withMessage('Este campo tiene que tener como mínimo 2 caracteres y como máximo 20.'),
    check('email')
        .isEmail()
        .withMessage('Debés ingresar un email válido. Recordá usar @.'),
    check('password')
        .isLength({min:6, max:15})
        .withMessage('La contraseña debe tener como mínimo 6 caracteres y como máximo 15')
]