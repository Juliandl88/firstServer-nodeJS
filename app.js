const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


// settings

app.set("port", process.env.PORT || 3000); // establezco variable para el puerto
app.set("views", path.join(__dirname, "/views")); // establezco la ruta de las vistas
app.set("view engine", "ejs"); // establezco el motor de vistas

const routes = require('./routes/index');

// middlewares

app.use((req, res, next) => {
    console.log(`${req.url} - ${req.method}`); // establezco un middleware para mostrar la url y el metodo
    next();
    });

app.use(bodyParser.json()); // establezco el middleware para el body-parser
app.use(bodyParser.urlencoded({extended: false})); // establezco el middleware para el body parser

// routes

app.use(routes);

// static files

app.use(express.static(path.join( __dirname, "/public"))); // establezco la ruta de los archivos estaticos

//start the server

app.listen(app.get("port"), () => {
    console.log("Server on port " + app.get("port"))
    });

