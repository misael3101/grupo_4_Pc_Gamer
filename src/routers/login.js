const express = require("express");;
const app = express();
const router = express.Router()

const indexControlador = require('../controllers/loginControllers');
const registerControlador = require('../controllers/registerController');


router.get('/', indexControlador.indexLogin);

router.get('/register', indexControlador.register);


module.exports = router;

