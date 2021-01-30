class Monster{
    constructor(x,y,r){
        var options={
    isStatic:true
        }
        this.body=Bodies.circle(x,y,r,options)
        this.r=r
        World.add(world,this.body)
        var rand=Math.round(random(1,4))
        console.log(rand)
        switch(rand){
            case 1:
                this.image=loadImage("monster1.png")
                break
                case 2:
                    this.image=loadImage("monster2.png")
                    break
                    case 3:
                        this.image=loadImage("monster3.png")
                        break
                        case 4:
                            this.image=loadImage("monster 4.png")
                            break
        }
       
       
      
    }
    display(){
        var pos=this.body.position
imageMode(CENTER)
image(this.image,pos.x,pos.y,this.r,this.r)
    }

}