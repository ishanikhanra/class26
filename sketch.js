
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbinbase;
var dustbinright;
var dustbinleft;
var ground;
var dustbinimg;
var dustbinbasesprite;


function setup() {
	createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;

	paper=new Paper(200,200);

	dustbinbase=new Dustbin(600,300,120,140);
	dustbinleft=new Dustbin(540,315,80,20);
	dustbinright=new Dustbin(660,315,80,20);

	ground=new Ground(400,370);

	
    

	Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update(engine);
  rectMode(CENTER);
  
  paper.display();
  
  dustbinleft.display();
  dustbinright.display();
  dustbinbase.display();

  paper.display();

  ground.display();
  
  
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
  
   Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100});

  }
}

