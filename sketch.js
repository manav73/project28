const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    boy = loadImage("boy.png")
}

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;

     tree = new Tree(1050,580)
     stoneObj=new Stone(235,420,30);
     mango1=new mango(1100,100,30);
      mango2=new mango(1170,130,30); 
      mango3=new mango(1010,140,30);
      mango4=new mango(1000,70,30); 
      mango5=new mango(1100,70,30); 
      mango6=new mango(1000,230,30); 
      mango7=new mango(900,230,40); 
      mango8=new mango(1140,150,40); 
      mango9=new mango(1100,230,40); 
      mango10=new mango(1200,200,40); 
      mango11=new mango(1120,50,40); 
      mango12=new mango(900,160,40);
      launcher = new Launcher(stoneObj.body,{x:235,y:420})
      ground = new Ground(width/2,600,width,20)
      
}

function draw(){
    background("white");
    Engine.update(engine);
    //strokeWeight(4);
    image(boy,200,340,200,300)
    tree.display()

    mango1.display()
    mango2.display()
    mango3.display()
    mango4.display()
    mango5.display()
    mango6.display()
    mango7.display()
    mango8.display()
    mango9.display()
    mango10.display()
    mango11.display()
    mango12.display()

    stoneObj.display()

    launcher.display()

   
    ground.display()
    detectollision(stoneObj,mango1)
    detectollision(stoneObj,mango2)
    detectollision(stoneObj,mango3)
    detectollision(stoneObj,mango4)
    detectollision(stoneObj,mango5)
    detectollision(stoneObj,mango6)
    detectollision(stoneObj,mango7)
    detectollision(stoneObj,mango8)
    detectollision(stoneObj,mango9)
    detectollision(stoneObj,mango10)
    detectollision(stoneObj,mango11)
    detectollision(stoneObj,mango12)
    
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode===32) {
       launcher.attach(stoneObj.body)
    }
}

function detectollision(lstone,lmango){
     mangoBodyPosition=lmango.body.position 
     stoneBodyPosition=lstone.body.position 
     var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) 
     if(distance<=lmango.r+lstone.r) {
        Matter.Body.setStatic(lmango.body,false); 
    } 
}