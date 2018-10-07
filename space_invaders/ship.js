function Ship(){

	this.x = width/2;
	this.y = height-20;
	this.xdir = 0;

	this.show = function(){

		fill(0, 0, 255);
		rectMode(CENTER);
		rect(this.x, height-20, 20, 20)
	}

	this.move = function(dir){

		this.x+= this.xdir*10;
	}

	this.setDir = function(dir){
		this.xdir = dir;
	}

}