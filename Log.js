class Log
{
    constructor(x,y,height,angle)
    {
        var options={
            restitution: 0.8,
            friction : 1.0,
            density: 1.0
        }
        this.body = Bodies.rectangle(x,y,20,height,options);
        this.w= 20;
        this.h = height;
        Matter.Body.setAngle(this.body,angle);
         World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("pink");
        fill(255);
        rect(0,0,this.w,this.h);
        pop();
    }
}