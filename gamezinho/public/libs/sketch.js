var ball;
var player1, player2;
var socket;

function setup() {

    createCanvas(400, 600);
    ball = new Ball(width/2, height/2);

    player1 = new Player((width/2)-30, 10);
    player2 = new Player((width/2)-30, height-30);

    socket = io.connect("http://localhost:3000");
}

function draw() {

    background("#2b580c");
    noStroke()
    fill("#fff")
    rect(0, height/2, width, 5)

    player2.show();
    player1.show();

    ball.show();
    ball.move();
     
    player2.move();
    player1.move();

    if(ball.hits(player1)) {
        console.log("opa");
    }

    if(ball.hits(player2)) {
        console.log("opa2");
    }

    player1.keyListener();
    player2.keyListener();
}



