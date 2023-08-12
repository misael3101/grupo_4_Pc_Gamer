//requerir los paquetes

const express = require("express");
const path = require("path");
const app = express();
const routerIndex = require('./routers/index')
const routerLogin = require('./routers/login')
const routerAyuda = require('./routers/ayuda')
const routerCarrito = require('./routers/productCart')
const routerregister = require('./routers/register')
const routerProductDetails = require('./routers/detalles')
//declarar los recursos estaticos (img, css, etc)

app.use(express.static("public"))

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'));
// manejor de rutas


// ruta Raiz
app.use(routerIndex);
//carrito de compras

app.get('/carrito', routerCarrito)

// registro

app.get('/register', routerregister)
// acceder a su cuenta

app.use('/login', routerLogin)
 
 // detalle de producto
app.get('/detalleP', routerProductDetails)
// ayuda =D
app.get('/ayuda', routerAyuda);


//poner a escuchar al servidor 

app.listen(3555, () => console.log("servidor corriendo  http://localhost:3555"))
