function Ball(width, height) {

    this.r = 8;

    this.xspeed = 2.6;
    this.yspeed = 2.8;
    this.xdirection = 1;
    this.ydirection = 1;
    this.x = width;
    this.y = height;

    this.point = false;

    this.updateViewDirection = (direction) => {
        
        this.xdirection= direction;
        this.ydirection = direction;

        console.log("mudou a direção para ", this.xdirection, this.ydirection);
    }

    this.show = () => {
        
        ellipseMode(RADIUS);
        noStroke(); 
		ellipse(this.x, this.y, this.r,this.r);    
    }

    this.hits = (player) => {
        
        let dx = player.x - (this.x);
        let dy = player.y - (this.y);

        let distance = sqrt(dx * dx + dy * dy);
        let minDist = (player.height*2+this.r) + (this.r);
  
        if(distance < minDist) {
            
            this.ydirection *= -1;
            
            return true;
        }

        return false;   
    }
    this.resetPosition = (x,y) => {

        this.x = x;
        this.y = y;
    }

    this.move = () => {

        this.x = this.x + this.xspeed * this.xdirection;
        this.y = this.y + this.yspeed * this.ydirection;
       
         if(this.y + this.r > (height * 2) ||this.y < this.r ) {
            
            this.ydirection = 0;
            this.xdirection = 0;
            this.y = height;
            this.x = width;ball
         }
        
         if(this.x + this.r > width * 2 || this.x < this.r ) {
            
                this.xdirection *= -1;
         }
    }
}