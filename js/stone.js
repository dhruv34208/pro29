class Stone{
constructor(x,y,radius){
var options = {
    isStatic:false
}
this.x=x;
this.y=y;
this.radius=radius;
this.body=Bodies.circle(x,y,radius,options)
World.add(world,this.body)



}
display(){
var pos = this.body.position;
Fill("red");
ellipseMode(RADIUS);
ellipse(pos.x,pos.y,this.radius,this.radius);


}



}