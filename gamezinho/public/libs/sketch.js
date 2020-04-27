var ball;
var player1, player2;
var socket;
var inited = false;

const MOVE_PLAYER1 = 'move';
const MOVE_PLAYER2 = 'move2';
const GAME_CONTROL = 'game-control';
const BALL_ROLLING = 'ball-rolling';

var room;

function setup() {
    
    createCanvas(400, 600);
    
    ball = new Ball(width/2, height/2);

    player1 = new Player((width/2)-30, 10);
    player2 = new Player((width/2)-30, height-30);

    initSocket();
}

function initSocket() {

    const url = getURL();
    const splitedURL = url.split("/");
    this.room = splitedURL[3];
    const username = splitedURL[4];

    console.log("usuario: ", username);
    console.log("room: ", room);

    socket = io.connect("http://localhost:3000");
    
    socket.emit("joinRoom", {username: username, name: room});

    socket.on('initGame', function(dataPlayerB){
       
    })


    // socket.on(GAME_CONTROL, gameControl);
    // socket.on(MOVE_PLAYER1, player1Moviment);
    // socket.on(MOVE_PLAYER2, player2Moviment); 
    // socket.on(BALL_ROLLING, updateBall);
}

function updateBall(data) {
   ball.setColor("#c00");
//    ball.updateBall(data.x*-1, data.y*-1);
}

function setInit(status) {
    this.inited = status;   
}

function gameControl(data) {
   
    setInit(data.started);
    ball.updateViewDirection(-1);
}

function player1Moviment(data) {
  
    player1.setX(data.x);
    player1.setY(data.y);
}

function player2Moviment(data) {

    player2.setX(data.x);
    player2.setY(data.y);
}

function draw() {

    init();
    
    background("#2b580c");
    noStroke()
    fill("#fff")
    rect(0, height/2, width, 5)


    if(this.inited) {
        console.log("começou");
    }

    // player2.show();
    // player1.show();  

    // ball.show();

    // if(ball.point) {
    //     ball.resetPosition(width/2, height/2);
    // }

    // if(inited) {
    //     ball.move();
    // }
    
    // player1.move();
    // player2.move();
    
    // socket.emit(MOVE_PLAYER1, {
    //     y: player1.y,
    //     x: player2.x
    // })

    // socket.emit(MOVE_PLAYER2, {
    //     y: player2.y,
    //     x: player1.x
    // })

    // socket.emit(BALL_ROLLING, {
    //     x: ball.x,
    //     y: ball.y,
    //     point: ball.point
    // })

    // if(ball.hits(player1)) {
       
    // }

    // if(ball.hits(player2)) {
       
    // }

    // player2.keyListener();
}

function init() {

    if(keyCode === ENTER){
       
       this.inited = true;

       socket.emit(GAME_CONTROL, {
            started:this.inited
       });
    }
}


