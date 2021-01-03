class dustbin {
  constructor(x,y,width,height) {
    var option = {
        isStatic: true
    }

    this.dust = Bodies.rectangle(x,y,width,height,option);
    World.add(world,this.dust);

    this.wi = width;
    this.he = height;
  }

    display() {
        rectMode(CENTER);
        rect(this.dust.position.x,this.dust.position.y,this.wi,this.he);
    }
   
}