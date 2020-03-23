var ball;
var barPlayer, player2;

function setup() {

    createCanvas(400, 600);
    // ball = new Ball(width, height);

    barPlayer = new Player((width/2)-30, 10);
    player2 = new Player((width/2)-30, height-30);
    
}

function draw() {

    background("#2b580c");
    noStroke()
    fill("#fff")
    rect(0, height/2, width, 5)

    // ball.show();

     player2.show();
    // player2.move();

    // ball.move(barPlayer);

    // // if(ball.point) {
    // //     ball.resetPosition(width/2, height/2);   
    // // }

    // ball.move(player2);
    
    // // if(ball.point) {
    // //     ball.resetPosition(width/2, height/2);   
    // // }
    
    // //ball.move();

    barPlayer.show();
    // barPlayer.move();

    // barPlayer.keyListener();
}


