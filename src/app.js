//requerir los paquetes

const express = require("express");
const path = require("path");
const app = express();
const routerIndex = require('./routers/index')
const routerLogin = require('./routers/login')
const routerAyuda = require('./routers/ayuda')
const routerCarrito = require('./routers/productCart')
const routerregister = require('./routers/register')
const productsRouter = require('./routers/productos');
//declarar los recursos estaticos (img, css, etc)

app.use(express.static("public"))
app.use(express.urlencoded({ extended: false })); 
app.use(express.json()); 
//app.use(methodOverride('_method')); 

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
 app.use('/producto', productsRouter);


// ayuda =D
app.use('/ayuda', routerAyuda);


//poner a escuchar al servidor 

app.listen(3555, () => console.log("servidor corriendo  http://localhost:3555"))
