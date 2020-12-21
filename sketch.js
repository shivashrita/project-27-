
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var world;

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;
	roofobj = new roof(width/2,height/4,width/4,20);
	bobD = 40;
	bobPosX = width/2;
	bobPosY = height/4 + 500;
	bob1 = new bob(bobPosX-bobD*2,bobPosY,bobD);
	bob2 = new bob(bobPosX-bobD,bobPosY,bobD);
	bob3 = new bob(bobPosX,bobPosY,bobD);
	bob4 = new bob(bobPosX+bobD,bobPosY,bobD);
	bob5 = new bob(bobPosX+bobD*2,bobPosY,bobD);

	var render = Render.create({
	element: document.body,
	engine: engine,
	options:{
		width: 1200,
		height: 700,
		wireframes: false

	}	
	});

	rope1 = new rope(bob1.body,roofobj.body,-bobD*2,0);
	rope2 = new rope(bob2.body,roofobj.body,-bobD*1,0);
	rope3 = new rope(bob3.body,roofobj.body,0,0);
	rope4 = new rope(bob4.body,roofobj.body,bobD*1,0);
	rope5 = new rope(bob5.body,roofobj.body,bobD*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

  roofobj.display();

  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -50,y: -45})
	}
}

function drawLine(constraint)
{
   bobBodyPosition = constraint.bodyA.position;
   roofBodyPosition = constraint.bodyB.position;

   roofBodyOffset = constraint.pointB;

   roofBodyX = roofBodyPosition.x+roofBodyOffset.x;
   roofBodyY = roofBodyPosition.y+roofBodyOffset.y;

   line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX.roofBodyY
	)

}
