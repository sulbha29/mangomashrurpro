
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree;
var treeimg;
var boy;
var boyimg;
function preload()
{
//treeimg=loadImage("images/tree.png");
	boyimg=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1200, 700);

//tree = createSprite(800,365,20,20);
//tree.addImage(treeimg);
//tree.scale= 0.5;

boy = createSprite(200,590,20,20);
boy.addImage(boyimg);
boy.scale= 0.15;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 stone1 = new stone(120,500,20);
	 ground1 = new Ground(600,680,1200,20);
	// treee = new Treee(800,400);
	 mango1 = new Mango(800,100);
	 //mango2 = new Mango(870, 400);
	 //mango3 = new Mango(780,405);
	 elastic1 = new Chain(stone1.body,{x:130,y:510});
	 tree = new Tree(800,365,600,600);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  Engine.update(engine);
  strokeWeight(4);
  drawSprites();
  //tree.display();
  stone1.display();
  ground1.display();
  tree.display();
  mango1.display();
  //mango2.display();
  //mango3.display();
  elastic1.display();
  detectollision(stone1,mango1)
 
}



function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    elastic1.fly();
}

function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.width+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }