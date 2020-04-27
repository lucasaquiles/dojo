const express = require("express");

const app = express();
const cors = require('cors');

app.use(cors());

const server = app.listen(3000);
const socket = require('socket.io');
const io = socket(server);

const ws = require('./socketListener');

app.use('/:room/:username', express.static('public'), function(req, res, next) {

    next(req, res);
});

io.sockets.on('connection', ws.socketListener);

// function initSocketConnection(socket) {
    
//     socket.on('game-control', gameControl);

//     socket.on('move', move);
//     socket.on('move2', move2);
//     socket.on('ball-rolling', ballRolling);

//     if(players.length < 2){
//         console.log("new connection: ", socket.id);
//         players.push(socket.id);
//     }
    
//     function ballRolling(data) {
//         socket.broadcast.emit('ball-rolling', data);
//     }

//     function move(data) {

//         socket.broadcast.emit('move', data);
//     }

//     function move2(data) {

//         socket.broadcast.emit('move2', data);
//     }

//     // function hit(data) {
//     //     socket.broadcast.emit('hit', data);
//     // }

//     function gameControl(data) {

//         socket.broadcast.emit('game-control', data);
//     }
// }




