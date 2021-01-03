class ground {
    constructor(x,y,width,height) {
        var option={
            isStatic: true
        }

        this.gr = Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.gr);

        this.wi = width;
        this.he = height;

    }

    display() {

        var pos = this.gr.position;
        
        rectMode(CENTER);
        rect(pos.x,pos.y,this.wi,this.he);
    }
}