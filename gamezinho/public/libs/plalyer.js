function Player(x, y) {

    this.id;
    this.name;
    this.x = x;
    this.y = y;

    this.height = 10;
    this.width = 50;

    this.xdir = 0;

    this.setId = (id) => {
        this.id = id;
    }
    
    this.setName = (name) => {
        this.name = name;
    }

    this.show =  () => {
        
        rect(this.x, this.y,this.width, this.height);
    }

    this.setX = (x) => {
        this.x = x;
    }

    this.setY = (y) => {
        this.y = y;
    }

    this.move = () => {
        
		this.x+= this.xdir*5;
	}

	this.setDir = (dir) => {
        
        this.xdir = dir;
    }
    
    this.keyListener = () => {
        
        if(keyCode === RIGHT_ARROW){
            this.setDir(1);
        }
    
        if(keyCode === LEFT_ARROW){
    
            this.setDir(-1);
        }
    }
    
}


