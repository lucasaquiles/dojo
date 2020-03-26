var ball;
var player1, player2;
var socket;
var inited = false;

const MOVE_PLAYER1 = 'move';
const MOVE_PLAYER2 = 'move2';
const GAME_CONTROL = 'game-control'

function setup() {

    createCanvas(400, 600);
    ball = new Ball(width/2, height/2);

    player1 = new Player((width/2)-30, 10);
    player2 = new Player((width/2)-30, height-30);

    socket = io.connect("http://192.168.0.6:3000");

    socket.on(MOVE_PLAYER1, player1Moviment);
    socket.on(MOVE_PLAYER2, player2Moviment); 
    socket.on(GAME_CONTROL, gameControl);
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

    player2.show();
    player1.show();  

    ball.show();

    if(this.inited) {
        console.log("começou");
        ball.move();
    }
    
    player1.move();
    player2.move();
    
    socket.emit(MOVE_PLAYER1, {
        y: player1.y,
        x: player2.x
    })

    socket.emit(MOVE_PLAYER2, {
        y: player2.y,
        x: player1.x
    })

    if(ball.hits(player1)) {
       
    }

    if(ball.hits(player2)) {
       
    }

    player2.keyListener();
}

function init() {
    if(keyCode === ENTER){
       this.inited = true;

       socket.emit(GAME_CONTROL, {
            started:this.inited
       });
    }
}


