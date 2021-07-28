class Link{
constructor(bodyA,bodyB){
var lastLink = bodyA.body.bodies.length-2;
this.body = constraint.create(
{

bodyA:bodyA.body.bodies[6],

pointA:{x:0,y:0},
bodyB:bodyB,
pointB:{x:0,y:0},
length:-10,
stiffness:0.01,
});

World.add(world,this.link)









}

display(){








}

}