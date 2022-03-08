const fs = require("fs");

var directory = process.argv[2];
var extension = process.argv[3];

fs.readdir(directory, function(err, list) {
    if (list) {
        let archivosFiltrados = list.filter((x) => x.split(".")[1] == extension);
    
        archivosFiltrados.forEach((x) => console.log(x));
    } else {
        console.log("Directorio no válido");
    }
});