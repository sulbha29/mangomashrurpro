class Tree {
    constructor(x, y, width, height){
        var options={
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.width=width;
        this.height=height
         this.body = Bodies.rectangle(x,y,width,height,options);
         this.tree = loadImage("images/tree.png");
     // World.add(world,this.body)
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER)
      imageMode(CENTER);
      image(this.tree, 0, 0, this.width, this.height);
      pop();
    }
   
  };