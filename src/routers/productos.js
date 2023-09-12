const express = require("express");;
const app = express();
const router = express.Router()
const bodyParser = require('body-parser');

const productControlador = require('../controllers/productController');

router.get('/detalleP/:id', productControlador.productDetails);

//crear producto
router.get('/create-product/', productControlador.create); 
router.post('/create-product/', productControlador.prossCreate); 

//editar producto
router.get('/edit-product/:id' , productControlador.edit);
router.post('/edit-product/:id' , productControlador.edicion, bodyParser.json())

//eliminar
router.post('/delete/:id', productControlador.destroy);





module.exports = router;