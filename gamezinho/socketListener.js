
const rooms = new Array()

function Room(roomName, users) {

    this.roomName = roomName;
    this.users = users;
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

module.exports.socketListener = function(socket) {
    
    socket.on('disconnect', onDisconect);
    
    socket.on("joinRoom", function(room) {
        
        console.log("room: ", room);
        
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
                    newRoom.users.push(new User(socket.id, room.username));
                    
                    rooms.push(newRoom);
                }
                
                showRoom();
            });

            
        }
    });
}