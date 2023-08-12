const express = require("express");;
const app = express();
const router = express.Router()

const ayudaControlador = require('../controllers/ayudaController');

router.get('/ayuda', ayudaControlador.ayuda);

module.exports = router;

