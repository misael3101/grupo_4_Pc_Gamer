const express = require("express");;
const app = express();
const router = express.Router()

//middleare

const multerMiddleware = require("../middleware/multerMiddleware");
const registerMiddleare = require("../middleware/registerMiddleare");
const loginMiddleare = require("../middleware/loginMiddleware");
const guestMiddleware = require("../middleware/guestMiddleware");
const authMiddleware = require("../middleware/authMiddleware")

//controlador
const indexControlador = require('../controllers/loginControllers');
//const registerControlador = require('../controllers/registerController');




router.get('/register', guestMiddleware, indexControlador.register);

router.post('/register', multerMiddleware.single('imagen'), registerMiddleare, indexControlador.registerProceso)

router.get('/login', guestMiddleware, indexControlador.indexLogin);

router.post('/login', loginMiddleare ,indexControlador.loginproceso);

router.get('/perfil', authMiddleware, indexControlador.perfil)

router.get('/logout', indexControlador.logout)


module.exports = router;

