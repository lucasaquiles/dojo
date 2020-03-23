function Player(x, y) {

    this.x = x;
    this.y = y;

    this.height = 10;
    this.width = 50;

    this.xdir = 0;

    this.show =  () => {
        
        rect(this.x, this.y,this.width, this.height);
    }

    this.move = () => {
        
		this.x+= this.xdir*5;
	}

	this.setDir = (dir) => {
        
        this.xdir = dir;
    }
    
    this.keyListener = () => {
        
        if(keyCode === RIGHT_ARROW){
            console.log("key", keyCode, RIGHT_ARROW);
            this.setDir(1);
        }
    
        if(keyCode === LEFT_ARROW){
    
            this.setDir(-1);
        }
    }
    
}