//https://www.npmjs.com/package/strftime

const net = require("net");
const strftime = require("strftime");

var puerto = process.argv[2];

var server = net.createServer(function(socket){
    socket.write(strftime('%F %R', new Date()));
    socket.write("\n");
    socket.end();
});

server.listen(puerto);