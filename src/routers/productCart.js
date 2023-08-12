const express = require("express");;
const app = express();
const router = express.Router()

const productCartControlador = require('../controllers/productCartController');

router.get('/carrito', productCartControlador.productCart);

module.exports = router;