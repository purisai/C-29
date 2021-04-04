const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


function setup(){
    var canvas = createCanvas(1300,900);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,850,1200,20)
    ground2= new Ground(400,450,210,20)
    ground3= new Ground(740,780,250,20)

    box1=new Box(350,235,30,40);
    box2=new Box(380,235,30,40);
    box3=new Box(410,235,30,40);
    box4=new Box(440,235,30,40);
    box5=new Box(470,235,30,40);
    box6=new Box(380,195,30,40);
    box7=new Box(410,195,30,40);
    box8=new Box(440,195,30,40);
    box9=new Box(410,155,30,40);

    box10=new Box(650,505,30,40);
    box11=new Box(680,505,30,40);
    box12=new Box(710,505,30,40);
    box13=new Box(740,505,30,40);
    box14=new Box(770,505,30,40);
    box15=new Box(800,505,30,40);
    box16=new Box(830,505,30,40);
    box17=new Box(680,465,30,40);
    box18=new Box(710,465,30,40);
    box19=new Box(740,465,30,40);
    box20=new Box(770,465,30,40);
    box21=new Box(800,465,30,40);
    box22=new Box(710,405,30,40);
    box23=new Box(740,405,30,40);
    box24=new Box(770,405,30,40);
    box25=new Box(740,365,30,40);




    
   
  

    //ball=new Ball(300,250,100,100)
    //rope=new Rope(ball.body,{x:500, y:50});

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
 


    ground2.display()
    ground3.display()

    text("Drag the Hexagon and Release it, to lauch it towards the blocks",200,200)



 
}