const fs = require("fs");

module.exports = function (directory, extension, callback){
    fs.readdir(directory, function(err, list) {
        if (list) {
            let archivosFiltrados = list.filter((x) => x.split(".")[1] == extension);
            
            callback(null, archivosFiltrados);
        } else {
            callback(err, null);
        }
    });
}

//module.exports = { listarDirectorio }

