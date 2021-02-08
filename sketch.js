
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ground;
var box1,box2,box3;
var groundSprite

function preload()
{
	
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	 groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="white"

	ground = Matter.Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 
	  ball1=new paper(100,0,15)
	 box1=new dustbin(400,340,30,150)
	 box2=new dustbin(479,382,280,30)
	 box3=new dustbin(557,340,30,150)
	}


function draw() {
	background("yellow")
 Engine.update(engine)
  rectMode(CENTER);
  
  groundSprite.x=ground.position.x
  groundSprite.y=ground.position.y
  drawSprites();
  ball1.Display()
 box1.Display()
 box2.Display()
 box3.Display()
  console.log(ball1.x,ball1.y)
  //rect(ground.position.x,ground.position.y,width,10)
}
function keyPressed(){

	if (keyCode===(UP_ARROW)){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:15,y:-5})
	}
}


