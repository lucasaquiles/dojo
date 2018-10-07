var ship;

var flowers = [];
var drops = [];

function setup() {	
	
	createCanvas(400, 400);
	ship = new Ship();
	
	for(var i = 0; i < 6; i++){
		flowers[i] = new Flower(i*60+60, 60);	
	}
	
}

function draw() {
	background(000);
	ship.show();
	ship.move();
	

	for(var i = 0; i < drops.length; i++){
		drops[i].show();
		drops[i].move();

		for(var j = 0; j < flowers.length; j++){
			
			if(drops[i].hits(flowers[j])){
				flowers[j].grow();
				drops[i].evaporate()
				console.log("bateu");

			}
		}
	}

	var edge = false;
	for(var i = 0; i < flowers.length; i++){
		flowers[i].show();
		flowers[i].move();	

		if(flowers[i].x  > width || flowers[i].x  < 0){
			edge = true;
		}
	}

	if(edge){
		for(var i = 0; i < flowers.length; i++){
			flowers[i].shiftDown();
		}

	}

	for(var i = drops.length-1; i >=0; i--){
		if(drops[i].toDelete){
			drops.splice(i, 1);
		}
	}

}

function keyReleased(){

	if(key != ' '){
		ship.setDir(0);
	}
}

function keyPressed(){
	if(key === ' '){
		var drop = new Drop(ship.x, ship.y);
		drops.push(drop);
	}

	if(keyCode === RIGHT_ARROW){

		ship.setDir(1);
	}

	if(keyCode === LEFT_ARROW){

		ship.setDir(-1);
	}
}


















