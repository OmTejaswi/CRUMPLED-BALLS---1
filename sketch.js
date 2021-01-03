
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var bottomRect, leftRect, rightRect;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//function for static
	var static ={
		isStatic: true
	}

	//Create the Bodies Here.
	//create ball
	ball = new paper(50,600,25);
	
	//create dustbin
	bottomRect = new dustbin(600,650,200,20);

	leftRect = new dustbin(500,610,20,100);

	rightRect = new dustbin(700,610,20,100);

	//create ground
	ground1 = new ground(400,665,800,10);
	
	
	Engine.run(engine);
  
}


function draw() {
	background(0);

	//render ground
	ground1.display();
	
	//to render rectangles
	fill("#ffffff");
	bottomRect.display();
	leftRect.display();
	rightRect.display();

	//to render the circle
	fill("#FF1493");

	ball.display();
  
  drawSprites();
  
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.x,ball.x.position,{x:95,y:-95});
	}
}


