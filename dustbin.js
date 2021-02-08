class dustbin{
constructor(x,y,w,h){
this.y=y
this.x=x
this.w=w
this.h=h
this.body=Matter.Bodies.rectangle(x,y,this.w,this.y,{isStatic:true})
Matter.World.add(world,this.body)
}
Display(){
    push()
    rectMode(CENTER)
    fill("white")
    translate(this.body.position.x,this.body.position.y)
    rect(this.x,this.y,this.w,this.h)
pop()
}
}