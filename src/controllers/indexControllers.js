const fs = require('fs');
const path = require('path');

let direccionDataProducto = path.join(__dirname, '../data/dataProducto.json')

let controlador = {
    index: function(req, res) {
        const productos = JSON.parse(fs.readFileSync(direccionDataProducto, 'utf-8'));
        res.render('index', {productos : productos})
    }
}

module.exports = controlador;