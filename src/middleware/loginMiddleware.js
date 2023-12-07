const {body} = require("express-validator");


const validations = [
    body("correo")
         .notEmpty().withMessage("Tienes que escribir un correo electronico").bail() 
         .isEmail().withMessage("Tienes que escribir un formato de correo valido"),
    body("contrasena").notEmpty().withMessage("Tienes que escribir una contraseña"), 
];

module.exports = validations; 