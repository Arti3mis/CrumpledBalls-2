    class paper{

    constructor(x,y,r) {
    
    var opt={isStatic:false,restitution:0.3,friction:0.5,density:0.2}
    this.x=x
    this.y=y
    this.r=r
    this.image=loadImage("paper.png");
    this.paper=Bodies.circle(this.x,this.y,this.r/2,opt)
    World.add(world,this.paper);

    }    

    display(){

    var paperpos=this.paper.position;
    push()
    translate(paperpos.x,paperpos.y);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r)
    this.image.scale=1;
    pop()

    }

    }