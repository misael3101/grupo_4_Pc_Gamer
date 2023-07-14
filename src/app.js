//requerir los paquetes

const express = require("express");
const path = require("path");
const app = express();

const pach = require("path");

//declarar los recursos estaticos (img, css, etc)

app.use(express.static("public"))

//poner a escuchar al servidor 

app.listen(3555, () => console.log("servidor corriendo  http://localhost:3555"))


// manejor de rutas


// ruta Raiz
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})
//carrito de compras

app.get("/carrito", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"))
})

// inicio de sesion para el usuario

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})