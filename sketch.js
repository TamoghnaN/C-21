
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball,wall1,wall2,floor1,floor2,floor3,floor4;
let wallOptions = {isStatic:true}
var ballOptions = {restitution:1}

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
floor1 = Bodies.rectangle(400,700,800,20,wallOptions);
World.add(world,floor1)
floor2 = Bodies.rectangle(0,350,20,700,wallOptions);
World.add(world,floor2)
floor3 = Bodies.rectangle(800,350,20,700,wallOptions);
World.add(world,floor3)
floor4 = Bodies.rectangle(400,0,800,20,wallOptions);
World.add(world,floor4)
ball = Bodies.circle(200,100,20,ballOptions);
World.add(world,ball);
wall1 = Bodies.rectangle(600,650,15,100,wallOptions);
World.add(world,wall1);
wall2 = Bodies.rectangle(792.5,650,15,100,wallOptions);
World.add(world,wall2);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
push ();
fill ("red")
rect(floor1.position.x,floor1.position.y,800,20);
rect(floor2.position.x,floor2.position.y,20,700);
rect(floor3.position.x,floor3.position.y,20,700);
rect(floor4.position.x,floor4.position.y,800,20);
rect(wall1.position.x,wall1.position.y,15,100);
rect(wall2.position.x,wall2.position.y,15,100);
pop ();

ellipseMode(CENTER);
ellipse(ball.position.x,ball.position.y,20);

  drawSprites();
 
}
function keyPressed(){
	if (keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.04,y:-0.02})
	}
	if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.04,y:-0.02})
	}
}



