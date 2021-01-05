class Box
{
    constructor(x,y,width,height)
    {
        var op={restituttion:1}
        this.body=Bodies.rectangle(x,y,width,height,op)
        World.add(world,this.body) 
    }
    display(){
        var P=this.body.position
        var A=this.body.angle
        push()
       translate(P.x,P.y)
       rotate (A)
fill("yellow")
    rectMode(CENTER)
        rect(0,0,70,70)
        pop ()
    }
}