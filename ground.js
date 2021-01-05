class Ground
{
    constructor()
    {
        var op={isStatic:true}
        this.body=Bodies.rectangle(600,400,1200,20,op)
        World.add(world,this.body) 
    }
    display(){
        var P=this.body.position
        rectMode(CENTER)
        fill("brown")
        rect(P.x,P.y,1200,20)
    }
}