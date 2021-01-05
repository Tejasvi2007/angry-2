class Log
{
    constructor(x,y,width,height,angle)
    {
        var op={'restitution':0.8,
        'friction':1.0,
        'density':1.0}
        this.body = Bodies.rectangle(x, y, 20, 300, op);
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
    }
    display(){
        var P=this.body.position
        var A=this.body.angle
        push()
       translate(P.x,P.y)
       rotate (A)
fill("brown")
    rectMode(CENTER)
        rect(0,0,20,300)
        pop ()
    }
}