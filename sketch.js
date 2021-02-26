var helicopterIMG,packageIMG,packageSprite,packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

packageSprite = createSprite(320,155,10,10)
packageSprite.addImage(packageIMG)
packageSprite.scale = 0.3;

ground = createSprite(400,690,800,10);

	engine = Engine.create();
	world = engine.world;

packageBody_options={
	restitution:1.0
}

	packageBody = Bodies.circle(320,155,10,packageBody_options)
World.add(world,packageBody)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

ellipseMode(RADIUS)
ellipse(packageBody.position.x,packageBody.position.y,10,10)
//packageBody.addImage(packageIMG)

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



