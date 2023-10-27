const db = require("../database/models");

let controlador = {
    index: function(req, res) {
        db.Productos.findAll()
            .then(function(productos) {
                res.render("index",{productos:productos});
    })
}
}

module.exports = controlador;