const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,325,50,50);
    box2 = new Box(230,200,50,50);
    ground = new Ground(300,590,600,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   ground.display();
}