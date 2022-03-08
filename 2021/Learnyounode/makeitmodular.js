const modul = require('./mymodular');

var directory = process.argv[2];
var extension = process.argv[3];

modul(directory, extension, elcolbac);

function elcolbac(err, archivosFiltrados) {
    if (archivosFiltrados) {
        archivosFiltrados.forEach((x) => console.log(x));
    } else {
        console.log(err);
    }
}