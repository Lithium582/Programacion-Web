const http = require("http");

var url = process.argv[2];

http.get(url, function(response) {
    response.setEncoding('utf8');

    var respuestas = "";

    response.on('data', function(data){
        respuestas += data;
    });

    response.on("end", function() {
        let cantCaracteres = respuestas.length;

        console.log(cantCaracteres);
        console.log(respuestas);
    });
}).on('error', console.error);