class PlayerArcher {
  constructor(x, y, width, height) {
    const options = {
      isStatic: true,
      depth: 3
    };

    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    //this.collapse = false;
    this.image = loadImage("./assets/m.png");

    World.add(world, this.body);

    Matter.Body.setAngle(this.body, -PI / 2); // -90 degree
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    
    if (keyIsDown(DOWN_ARROW) && angle < -0.8) {
      angle += 0.01;
      Matter.Body.setAngle(this.body, angle);
    }

    if (keyIsDown(UP_ARROW) && angle > -1.5) {
      angle -= 0.01;
      Matter.Body.setAngle(this.body, angle);
    }
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
