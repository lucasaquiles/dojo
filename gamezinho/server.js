var express = require("express");

var app = express();
var server = app.listen(3000);

let socket = require('socket.io');

var io = socket(server);

app.use(express.static('public'));

io.sockets.on('connection', newConnection);

console.log("running..");

function newConnection(socket) {
    
    console.log(socket);
}


