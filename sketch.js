const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var back
var helicopterImage
var heli
var monster=[]
var obs=[]
var x=800
var bg
function preload(){
back=loadImage("background2.png")
helicopterImage=loadAnimation("helicop1.png","helicop2.png","helicop3.png","helicop4.png")
}



function setup() {
  createCanvas(1530,500);
bg=createSprite(width/2,height/2)
bg.addImage(back)
bg.velocityX=-5
bg.scale=2.5
  engine = Engine.create();
  world = engine.world;
heli=new Helicop()
}

function draw() {
  background(0);  
  Engine.update(engine);  
  heli.display()
  if(frameCount%200==0){
    x+=300
    monster.push(new Monster(x,Math.round(random(100,450)),50))
  }
  for(var i=0;i<monster.length;i++){
    monster[i].display()
  }
  if(frameCount%60==0){
    x+=300
    obs.push(new Obstacle(x,Math.round(random(100,450)),50))
  }
  for(var i=0;i<obs.length;i++){
   obs[i].display()
  }
  camera.position.x=heli.body.position.x
  camera.position.y=250
  if(bg.x<0){
    bg.x=width/2
  }
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(heli.body,{x:mouseX,y:mouseY})
}