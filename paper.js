class paper {
  constructor(x,y,r) {
      var option={
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
      }

      this.x = Bodies.circle(x,y,r,option);
      World.add(world,this.x);

      this.ra = r;
  } 
    display() {
    ellipseMode(RADIUS);
    ellipse(this.x.position.x,this.x.position.y,this.ra);
  }
}