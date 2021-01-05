class Bird
{
    constructor(x,y)
    {
        var op = {
            'density':1.5,
            'friction': 1.0,
            'restitution':0.5
          };
        this.body=Bodies.rectangle(x,y,width,height,op)
        World.add(world,this.body) 
    }
    display(){
        var P=this.body.position
        P.x=mouseX;
        P.y=mouseY;
        var A=this.body.angle
        push()
       translate(P.x,P.y)
       rotate (A)
        fill("red")
    rectMode(CENTER)
        rect(0,0,50,50)
        pop ()
    }
}