const express = require("express");;
const app = express();
const router = express.Router()

const productDetailsControlador = require('../controllers/productDetailsController');

router.get('/detalleP', productDetailsControlador.productDetails);

module.exports = router;