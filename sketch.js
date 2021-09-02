
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var music;

function preload(){
	N = loadImage("k.jpg");
	music = loadSound("sound.mp3");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	

	roof1= new roof(460,350,580,20,"black")
	strokeWeight(5);
	stroke("black");

	roof2= new roof(180,470,20,220,"black");
	roof3= new roof(740,470,20,220,"black")


	
	bob3= new bob(280,545,26.5,"red");
	bob4= new bob(342,545,26.5,"green");
	bob1= new bob(395,545,26.5,"red");
	bob2= new bob(450,545,26.5,"green");
	bob5= new bob(500,545,26.5,"red");
	bob6= new bob(560,545,26.5,"green");
	bob7= new bob(630,545,26.5,"red");


	
	string4 = new Rope(bob2.body,{x:450,y:350})
	string5 = new Rope(bob3.body,{x:280,y:350})
	string2= new Rope(bob4.body,{x:342,y:350})
	string3= new Rope(bob1.body,{x:395,y:350})
	string1 = new Rope(bob5.body,{x:500,y:350})
	string6 = new Rope(bob6.body,{x:560,y:350})
	string7 = new Rope(bob7.body,{x:630,y:350})



	
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
background(N);

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 bob6.display();
 bob7.display();
 

 string1.display();
 string2.display();
 string3.display();
 string4.display();
 string5.display();
 string6.display();
 string7.display();

 roof1.display();
 roof2.display();
 roof3.display();

 textSize(25);
 fill("black");
 strokeWeight(10)
 stroke("white");
 text("HELLO..... PRESS SPACE TO START",60,60);

  drawSprites();
}

function keyPressed(){ 
	if(keyCode === 32){
		 music.play();
		 Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-180,y:190});}
}