const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stones = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground = new Base(windowWidth/2,windowHeight-100,width,30)
  leftSide = new Base(width/2-350,height/2,500,100)
  rightSide = new Base(width-150,height/2,500,100)
bridge = new Bridge(20,{x:400,y:150})
jointPoint = new Base(20,20,20,20)
Matter.Composite.add(bridge.body,jointPoint);
jointLink= new Link(bridge,jointPoint);
for(var i = 0;i<9;i++){
var x = random(width/2-200,width/2+300)
var y = random(-10,140)
var stone = new Stone(x,y,80,80)
stones.push(stone)
}
}

function draw() {
  background(51);
  Engine.update(engine);


ground.display();
leftSide.display();
rightSide.display();
bridge.show();
}
