class paper{
    constructer(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        image=loadImage("paper.png");
        World.add(world,this.body);
        var pos=this.body.position;
    }
    display(){
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rotate(-1*this.angle);
        fill("white");
        pop()
    }
}