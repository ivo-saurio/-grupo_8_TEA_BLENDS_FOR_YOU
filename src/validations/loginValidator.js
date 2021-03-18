// EXPRESS VALIDATOR PARA EL FORMULARIO DE LOGIN

const { check } = require("express-validator");

module.exports = [
    
    check('email').notEmpty().withMessage('Este campo es obligatorio').isEmail().withMessage("Debe ingresar un email válido"),
    
    check('password').notEmpty().withMessage('Este campo es obligatorio').isLength({ min:6, max:15 }).withMessage("La contraseña debe contener como mínimo 6 caracteres"),
]