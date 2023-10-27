let controlador = {
    indexLogin: function(req, res) {
        res.render('login');
    },

    register: function(req, res) {
        res.render('register');
    }
}

module.exports = controlador;