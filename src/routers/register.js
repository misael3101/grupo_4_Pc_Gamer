const express = require("express");;
const app = express();
const router = express.Router()

const registerControlador = require('../controllers/registerController');

router.get('/register', registerControlador.register);

module.exports = router;
