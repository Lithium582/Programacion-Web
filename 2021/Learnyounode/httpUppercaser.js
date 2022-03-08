const map = require("through2-map");
const http = require("http");
const fs = require("fs");

var puerto = process.argv[2];
var ubicacionArchivo = process.argv[3];

var server = http.createServer(function(req, res){
    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(puerto);