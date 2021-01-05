//create Physics Engine
//namespacing   short form
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box;
var box2,box3,box4;
var pig1,log1,pig2,log2;
var bird;
function setup(){
    var canvas = createCanvas(1200,400);
    //create engine and world
    engine = Engine.create();
    world = engine.world;


//create box
box=new Box(700,320,70,70)
box2=new Box(920,320,70,70)
pig1=new Pig(810,350,60,60)
log1=new Log(805,200,300,20,PI/2);    //PI=360

box3=new Box(700,240,70,70)
box4=new Box(920,240,70,70)
pig2=new Pig(810,320,60,60)
log2=new Log(800,180,300,20,PI/2);    //PI=360
box5=new Box(810,160,70,70)
log3 =new Log(760,120,150,20,PI/7)
log4 =new Log(870,120,150,20,PI/7)
//create ground
ground=new Ground()
bird=new Bird(100,100)
    Engine.run(engine);
}

function draw(){
    background(0);
    box.display()
    box2.display()
    ground.display()
    pig1.display()
    log1.display();

    box3.display()
    box4.display()
    pig2.display()
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display()
}