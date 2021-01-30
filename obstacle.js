class Obstacle{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        var rand=Math.round(random(1,4))
        console.log(rand)
        switch(rand){
            case 1:
                this.image=loadImage("obs1 (2).png")
                break
                case 2:
                    this.image=loadImage("obs2 (2).png")
                    break
                    case 3:
                        this.image=loadImage("obs3 (2).png")
                        break
                        case 4:
                            this.image=loadImage("obs4 (2).png")
                            break
        }
        this.image.scale=0.1
    }
display(){
    var pos=this.body.position
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,this.r,this.r)
}
}