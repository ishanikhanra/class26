class Paper{
    constructor(x,y){
        var op={
         restitution: 0.3,
         friction: 0.5,
         density: 1.2

        }
        
        
        this.body= Bodies.rectangle(x,y,50,50,op);
        this.width=50;
        this.height=50;
        this.image=loadImage("sprites/paper img.png");

        World.add(world,this.body);

    }

    display(){
     
     
     
     push()
     translate(this.body.position.x, this.body.position.y);
     imageMode(CENTER);
     image(this.image, 0,0,this.width, this.height)
     pop()



    }

}