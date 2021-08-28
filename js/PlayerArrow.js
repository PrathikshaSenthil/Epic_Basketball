class PlayerArrow {
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
        
      };
      this.width = width;
      this.height = height;
      this.trajectory=[];
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/ball.png");
      
      World.add(world, this.body);
    }
    shoot() {
      var velocity = p5.Vector.fromAngle(playerArcher.angle);
      velocity.mult(30);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, { x:30,  y:-0.03});
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();


        if(this.body.velocity.x>0 && this.body.position.x>0){
          var position=[this.body.position.x,this.body.position.y];
          this.trajectory.push(position);
        }
        for(var i=0;i<this.trajectory.length;i++){

          //image(this.image,this.trajectory[i][0],this.trajectory[i][1],5,5);
          ellipse(this.trajectory[i][0],this.trajectory[i][1],5,5)
         }
      }
    
    }
