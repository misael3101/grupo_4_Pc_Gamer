const fs = require('fs');
const path = require('path');

let direccionDataProducto = path.join(__dirname, '../data/dataProducto.json')

let controlador = {
    productDetails: function(req, res) {
        const productos = JSON.parse(fs.readFileSync(direccionDataProducto, 'utf-8'));

        const id = req.params.id

        let productoAEnviar = productos.find(producto =>{
            return producto.id == id
        })
        
        res.render('productDetail', {productos : productoAEnviar});
    },
    create: (req, res) => {
		res.render('crearproducto')
	},

    edit: (req, res) => {
		res.render('editarproducto')
	},
}

module.exports = controlador;