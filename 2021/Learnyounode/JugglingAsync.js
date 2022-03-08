const http = require("http");

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

obtenerURL(url1, url2, url3);

function obtenerURL(u1, u2, u3) {
    let r1 = "", r2 = "", r3 = "";

    http.get(u1, function(response){
        response.setEncoding('utf8');
    
        response.on('data', function(data){
            r1 += data;
        });

        response.on("end", function() {
            console.log(r1);

            http.get(u2, function(response){
                response.setEncoding('utf8');
            
                response.on('data', function(data){
                    r2 += data;
                });
        
                response.on("end", function() {
                    console.log(r2);
        
                    http.get(u3, function(response){
                        response.setEncoding('utf8');
                    
                        response.on('data', function(data){
                            r3 += data;
                        });
                
                        response.on("end", function() {
                            console.log(r3);
                        });
                    }); 
                });
            });
        });
    });
    
    // console.log(r1);
    // console.log(r2);
    // console.log(r3);
}

