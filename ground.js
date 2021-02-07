class Ground {
    constructor(x,y,width) {
      var options = {
          isStatic: true
      }
      this.width = width;
      this.height = 15;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown")
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
