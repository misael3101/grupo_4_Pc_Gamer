const { body} = require('express-validator');

const validations = [
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'), 
    body('apellido').notEmpty().withMessage('Tienes que escribir un apellido'), 
    body('correo').notEmpty().withMessage('Tienes que escribir un correo').bail()
        .isEmail().withMessage('Debes escribir un correo valido'), 
    body('contrasena').notEmpty().withMessage('Tienes que escribir una contraseña'), 
    body('cumpleanos').notEmpty().withMessage('Debes agregar una fecha de nacimiennto'), 
    body('genero').notEmpty().withMessage('Debes seleccionar un genero'),
    body('imagen').custom((value, { req }) => {
        let file = req.file;
        if (!file) {
            throw new Error('Tienes que seleccionar una imagen')
        }
        return true
    } )
]



module.exports = validations