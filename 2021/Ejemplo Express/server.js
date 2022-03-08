//Extensión para crear el servidor
const { Console } = require('console');
const express = require('express');
//Extensión para trabajar con rutas
const path = require('path');

const router = express.Router();

const app = express();
//De esta manera nos aseguramos de que se está descargando el CSS y el JS
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({
    extended: true
}));

const hostname = '127.0.0.1';
const port = 1337;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/fobal", function(req, res) {
    return res.end(JSON.stringify(obtenerFobal()));
});

app.get("/teletubbies", function(req, res) {
    return res.end(JSON.stringify(obtenerTeletubbies()));
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username;
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    
    console.log(username, nombre, edad);

    res.sendFile(path.join(__dirname, "/index.html"));
    //res.end();
})

function obtenerFobal() {
    let users = [
        {id: 1, firstName: "Pablo", lastName: "García", email: "Canario@gmail.com"},
        {id: 2, firstName: "Diego", lastName: "Perez", email: "Ruso@gmail.com"},
        {id: 3, firstName: "Paolo", lastName: "Montero", email: "Paolo@gmail.com"},
        {id: 4, firstName: "Richard", lastName: "Morales", email: "Chengue@gmail.com"}
    ];

    return users;
}

function obtenerTeletubbies(){
    return [];
}

app.use('/', router);
app.listen(port);

console.log(`Server running at http://${hostname}:${port}/`);

