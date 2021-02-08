class paper{
constructor(x,y,r){
    this.x=x
    this.y=y
    this.r=r
    this.body=Bodies.circle(this.x,this.y,this.r/2,{isStatic:false,restitution:0,density:1.2,friction:1})
    Matter.World.add(world,this.body)
    
}
Display(){
    //var paperpos=this.body.position;
    push()
    fill("brown")
    
    translate(this.body.position.x,this.body.position.y) 
    rotate(this.body.angle)
    ellipseMode(RADIUS)
    ellipse(0,0,this.r)
   pop()
}
}