const express = require("express");;
const app = express();
const router = express.Router()

const productControlador = require('../controllers/productController');

router.get('/detalleP/:id', productControlador.productDetails);

router.get('/create-product/', productControlador.create);

router.get('/edit-product/:id' , productControlador.edit)





module.exports = router;