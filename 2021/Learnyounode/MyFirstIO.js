const fs = require("fs");

var testfile = process.argv[2];
var miArchivo = fs.readFileSync(testfile, {encoding:'utf8', flag:'r'});

let cantLineas = miArchivo.split("\n").length - 1;

console.log(cantLineas);
