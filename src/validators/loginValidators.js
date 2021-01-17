const { check } = require('express-validator');

module.exports = [
    check('email')
        .isEmail()
        .withMessage('Debés ingresar un email válido. Recordá usar @.'),
    check('password')
        .isLength({ min: 6, max: 15 })
        .withMessage('La contraseña debe tener como mínimo 6 caracteres y como máximo 15')
]