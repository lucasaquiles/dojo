
const rooms = new Array()

function Room(roomName, users) {

    this.roomName = roomName;
    this.users = users;

    this.showUsers = () => {

        this.users.forEach((user) => { 
            console.log("[user.id]: "+user.id+" - "+user.username);
        })
    }
    
}

function User(id, username) {

    this.id = id;
    this.username = username;
}

function showRoom() {
    
    for(i = 0; i < rooms.length; i++) {
        console.log("sala: "+rooms[i].roomName);

        for(j = 0; j < rooms[i].users.length; j++) {
            const user = rooms[i].users[j]
            console.log("usuarios: "+"["+user.id+"] "+user.username);
        }
    }
}

function onDisconect(socket) {

    // console.log('Got disconnect!');
}
/**
 * acessa uma url com o nome da sala e o username
 * se a sala exitir e tiver vaga na sala, participa do jogo
 * depois de confirmado na sala, inicia o jogo
 */
module.exports.socketListener = function(socket) {
    
    socket.on('disconnect', onDisconect);
    
    socket.on("sendToClient", function(data){
        console.log("emit", data);
        socket.to(data.id).emit(data.resume, data.content);
    });

    socket.on("join", function(room) {
        
        if (!(/[^\w.]/.test(room.name))) {
            
            socket.join(room.name, function() {
                
                if(rooms.length > 0){

                    for(i = 0; i < rooms.length; i++) {
                        const currentRoom = rooms[i];

                        const isSameRoom = currentRoom.roomName == room.name;
                        const isAllowToJoin = currentRoom.users.length < 2;

                        if(isSameRoom && isAllowToJoin) {
                            console.log("logou no lugar certo");

                            const user = new User(socket.id, room.username);
                            currentRoom.users.push(user);
                            
                            socket.in(room.name).emit('initGame', user);
                            return;
                        }
                    }
                }else{

                    const newRoom = new Room(room.name, new Array());
                    const user = new User(socket.id, room.username);
                    newRoom.users.push(user);
                    
                    rooms.push(newRoom);
                }
                
                showRoom();
            });

            
        }
    });
}