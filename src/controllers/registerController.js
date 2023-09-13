const { Console } = require('console');
const fs = require('fs');
const path = require('path');

let direccionDataUser = path.join(__dirname, '../data/dataUsuario.json')

let controlador = {
    register: function(req, res) {
        res.render('register');
    },
}

module.exports = controlador;