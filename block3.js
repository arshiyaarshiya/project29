class Block3 {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.width = 30;
      this.height = 40;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill ("pink");
      stroke(0);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
