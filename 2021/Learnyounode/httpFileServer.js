//https://www.npmjs.com/package/strftime
const http = require("http");
const fs = require("fs");
const strftime = require("strftime");

var puerto = process.argv[2];
var ubicacionArchivo = process.argv[3];

var server = http.createServer(function(req, res){
    res.writeHead(200, { 'content-type': 'text/plain' });
    fs.createReadStream(ubicacionArchivo).pipe(res);
});

server.listen(puerto);