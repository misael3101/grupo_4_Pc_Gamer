//requerir los paquetes

const express = require("express");
const path = require("path");
const app = express();

const pach = require("path");

//poner a escuchar al servidor 

app.listen(3555, () => console.log("servidor corriendo"))


// manejor de rutas

// ruta Raiz
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})
//
app.get("/pato", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})