
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

	var paper1,ground1,d1,d2,d3;
	var dust,bin,cb,ball;

	function preload()
	{
	 dust=loadImage("dustbingreen.png");
	 cb=loadImage("paper.png");
	}

	function setup() {
		createCanvas(800, 700);


		engine = Engine.create();
		world = engine.world;

		//Create the Bodies Here.
		paper1=new paper(200,350,20);
		ground1=new ground(400,600,800,20);
		d1=new dustbin(580,580,100,20);
		d2=new dustbin(530,550,20,70);
		d3=new dustbin(630,550,20,70);
		
		bin= createSprite(580,510,100,100);
		bin.addImage("GreenDustbin",dust);
		bin.scale=0.5;

        Engine.run(engine);

	}


	function draw() {
	rectMode(CENTER);
	background(255);

	paper1.display();
	ground1.display();
	d1.display();
	d2.display();
	d3.display();
	
	drawSprites();
	}

   function keyPressed(){

   if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paper1.paper,paper1.paper.position,{x:1.2,y:-4});
    }

   }
