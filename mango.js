class Mango {
    constructor(x, y){
        var options={
            isStatic: true,
            restitution:0,
            friction:1
        }
      
        this.width=50;
        this.height=50

      
      this.body= Bodies.rectangle(x,y,50,50,options);
      this.image = loadImage("images/mango.png");
      World.add(world, this.body);
     
    }
    display(){
      var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			//ellipseMode(RADIUS)
			image(this.image, 0,0,this.width, this.height)
			pop()
    }
  };