var ball;
var player1, player2;
var socket;
var inited = false;

function setup() {

    createCanvas(400, 600);
    ball = new Ball(width/2, height/2);

    player1 = new Player((width/2)-30, 10);
    player2 = new Player((width/2)-30, height-30);

    socket = io.connect("http://localhost:3000");
    socket.on('move', player1Moviment) 
    socket.on('move2', player2Moviment) 
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

    background("#2b580c");
    noStroke()
    fill("#fff")
    rect(0, height/2, width, 5)

    player2.show();
    player1.show();  

    ball.show();
    init();
    if(inited) {

        ball.move();
    }
    
    player1.move();
    player2.move();
    
    socket.emit('move', {
        y: player1.y,
        x: player2.x
    })

    socket.emit('move2', {
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
        console.log("enter pressed");   
       this.inited = true;
    }
}


