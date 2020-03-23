function Ball(width, height) {

    this.r = 8;

    this.xspeed = 2.6;
    this.yspeed = 2.8;
    this.xdirection = 0.1;
    this.ydirection = 1;
    this.x = width/2;
    this.y = height/2;

    this.point = false;

    this.show = () => {
        ellipseMode(RADIUS);
        noStroke(); 
		ellipse(this.x, this.y, this.r,this.r);    
    }

    this.hits = (bar) => {
        
        console.log("this.ydirection", this.y);
        
         let dx = bar.x - this.x;
         let dy = bar.y - this.y;
        
         let distance = sqrt(dx * dx + dy * dy);

         let minDist = (bar.width-bar.height) + (this.r*2);
        
		 if (distance < minDist) {
        
			return true;
		}else{
			return false;
		}
    }


    this.resetPosition = (x,y) => {

        this.x = x;
        this.y = y;
    }

    this.move = (bar) => {

        this.x = this.x + this.xspeed * this.xdirection;
        this.y = this.y + this.yspeed * this.ydirection;
    
        if(this.hits(bar)) {
            
            if(this.y >= bar.height - this.r || this.y < this.r) {
               
                this.ydirection *= -1;
            }

            if(this.x > bar.width - this.r || this.x < this.r) {
         
                this.xdirection *= -1;
             
            }
        }
    }
}