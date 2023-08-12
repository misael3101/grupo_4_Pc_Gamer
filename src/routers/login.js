const express = require("express");;
const app = express();
const router = express.Router()

const indexControlador = require('../controllers/loginControllers');

router.get('/', indexControlador.indexLogin);

module.exports = router;

