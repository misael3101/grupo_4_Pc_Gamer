const express = require("express");;
const app = express();
const router = express.Router()

const indexControlador = require('../controllers/indexControllers');

router.get('/', indexControlador.index);

module.exports = router;

