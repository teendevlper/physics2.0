const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var grnd;
var box2;

function setup(){
    
    
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(200,200,50,50);
    box2 = new Box(225,100,50,50);

    var grnd_opt={
       isStatic : true
    }


    grnd = Bodies.rectangle(200,380,400,10,grnd_opt);
    World.add(world,grnd);
}


function draw(){
    
    background("grey");
    Engine.update(engine);
    box1.display();
    box2.display();
    
    rectMode(CENTER);
    //fill(255,44,24);
    rect(grnd.position.x,grnd.position.y,grnd.width,grnd.height);
}