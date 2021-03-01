// EXPRESS VALIDATOR PARA EL FORMULARIO DE REGISTRO

const { check, body } = require("express-validator");
const db = require('../database/models')

module.exports = [
    
   check('name').notEmpty().withMessage('Este campo es obligatiorio')
   .isLength({ min: 2, max: 20 }).withMessage('El nombre tiene que tener como mínimo 2 caracteres'),

   check('surname').notEmpty().withMessage('Este campo es obligatorio')
   .isLength({ min: 2, max: 20 }).withMessage('El apellido tiene que tener como mínimo 2 caracteres'),

   check('avatar'),

   check('email').notEmpty().withMessage('Este campo es obligatorio')
   .isEmail().withMessage("Debes ingresar un email válido")
   .custom(async function(email) { // CUSTOM es para 
       let emailRegistrado = await db.Usuarios.findOne(
           { 
               where : { email: email } });
       if (emailRegistrado) {
        throw new Error ("Este email ya está registrado")
       }
   }),

   check('password').notEmpty().withMessage('Este campo es obligatorio')
   .isLength({ min:8, max:15 }).withMessage("La contraseña debe contener como mínimo 8 caracteres"),

   check('repassword').notEmpty().withMessage('Este campo es obligatorio')
   .isLength({ min:8, max:15 }).withMessage("La contraseña debe contener como mínimo 8 caracteres")
   .custom(async function(repassword, req) { 
       let password = req.body.password;
       if(password != repassword){ 
        throw new Error ('Las contraseñas no son iguales')
       }
   }),
]
