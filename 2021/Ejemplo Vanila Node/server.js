//Extensión para crear el servidor
const http = require('http');
//Extensión para lectura de archivos
const fs = require("fs");
//Extensión para tratar URLs
const url = require("url");
//Extensión para trabajar con rutas
const path = require('path');

const hostname = '127.0.0.1';
const port = 1337;

const server = http.createServer((req, res) => {
    // console.log("req", req.url);
    // console.log("req", req.method);

    //Hago algo sólo si recibo un GET
    if (req.method == "GET") {
        const { pathname } = url.parse(req.url);
        console.log("PATH", pathname);

        //Si tengo un punto, tengo una extensión. Eso significa que debo retornar un archivo
        //Caso contrario, retorno uno de los métodos GET
        if (pathname.split(".").length > 1) {
            return retornarArchivo(req, res);
        } else if (pathname == "/") {
            return retornarArchivo(req, res);
        } else {
            return retornarGET(req,res);
        }
    }
});

//Función para manejar el retorno de archivos (el HTML, estilos y script JS)
function retornarArchivo (req, res) {
    let archivo = "." + req.url;
    let extension = "text/html";
    
    if (archivo == "./") {
        archivo = "./index.html";
    } else {
        let extensionJS = req.url.split(".").filter(x => x == "js");
        let extensionCSS = req.url.split(".").filter(x => x == "css");

        if (extensionJS.length > 0){
            extension = "application/javascript";
        } else if (extensionCSS.length > 0){
            extension = "text/css";
        }
    }

    res.writeHead(200, { 'Content-Type': extension });

    fs.readFile(archivo, null, function(err, data){
        if (err) {
            return manejar404(req, res);
        } else {
            res.write(data);
        }

        return res.end();
    });
}

//Esta función retorna listas, objetos o cualquier otro dato solicitado a través de un GET
function retornarGET (req,res) {
    const { pathname } = url.parse(req.url);
    
    switch (pathname) {
        case '/fobal': {
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            return res.end(JSON.stringify(obtenerFobal()));
        }
        case '/teletubbies': {
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            return res.end(JSON.stringify(obtenerTeletubbies()));
        }
        default: {
            return manejar404(req, res)
        }
    }
}

function manejar404(req, res){
    res.writeHead(404);
    res.write("PAGINITA NOT FOUND");

    return res.end();
}

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

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//const express = require("express");

