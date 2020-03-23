var express = require("express");
var app = express();
var server = app.listen(3000);

let socket = require('socket.io');
var io = socket(server);

var players = [];

app.use(express.static('public'));

io.sockets.on('connection', newConnection);

console.log("running..");

function newConnection(socket) {
    
    socket.on('hit', hit);
    socket.on('move', move);
    socket.on('move2', move2);

    if(players.length < 2){
        console.log("new connection: ",socket.id);
        players.push(socket.id);
    }else{

        console.log("lotou")
    }

    function move(data) {

        console.log("data", data);

        socket.broadcast.emit('move', data);
    }

    function move2(data) {

        socket.broadcast.emit('move2', data);
    }

    function hit(data) {
        socket.broadcast.emit('hit', data);
    }
}




