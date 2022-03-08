const fs = require("fs");

var testfile = process.argv[2];
fs.readFile(
    testfile,
    {encoding:'utf8', flag:'r'},
    function(err, data){
        if (err) {
            return console.log(err)
        }
        let cantLineas = data.split("\n").length - 1;
        console.log(cantLineas);
    });
