// EXPRESS VALIDATOR PARA EL FORMULARIO DE CREATE PARA PRODUCTOS

const { check } = require("express-validator");

module.exports = [
    
    check('name').notEmpty().withMessage('Este campo es obligatorio').isAlpha().withMessage('Solo letras'),
    
    check('size').notEmpty().withMessage('Este campo es obligatorio').isAlpha().withMessage('Solo letras'),

    check('price').isNumeric().withMessage('Solo números'),

    check('category').notEmpty().withMessage('Este campo es obligatorio'),

    check('description').notEmpty().withMessage('Este campo es obligatorio').isAlphanumeric()
]