const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stk,stk1,stk2,stk3,stk4,stk5,stk6,stk7,stk8,stk9,stk10;
var stk11,stk12,stk13,stk14,stk15,stk16,stk17,stk18,stk19,stk20,stk21,stk22,stk23,stk24;

function setup(){
    var canvas = createCanvas(1360,650);
    engine = Engine.create();
    world = engine.world;

    stk = new stick(680,500,1360,20);
    
    stk17 = new stick(798,250,650,160);
    stk1 = new stick(680,430,150,120);
    stk2 = new stick(575,430,70,120);
    stk3 = new stick(785,430,70,120)
    stk4 = new stick(680,335,280,70);
    stk7 = new stick(350,370,250,10);
    stk8 = new stick(680,445,80,94);
    // pop();
    stk9 = new stick(505,325,70,330);
    stk10 = new stick(855,327,70,330)
    stk5 = new stick(940,290,45,210);
    stk6 = new stick(1070,290,45,210);

    stk13 = new stick(340,440,280,100)
    stk14 = new stick(1020,393,280,196);
    stk11 = new stick(230,380,7,20);
    stk12 = new stick(1155,327,70,330);
    stk15 = new stick(355,450,200,80);
    stk16 = new stick(1005,440,200,65);
    // pop();
    stk18 = new stick(1005,290,45,210);
    stk19 = new stick(620,275,300,80);
    stk21 = new stick(655,275,240,80);
    stk20 = new stick(855,290,55,70);
    
    stk22 = new stick(622,300,305,10);
    stk23 = new stick(473,305,7,20);
   //  pop();
7
}

function draw(){
    background(255);
    Engine.update(engine);

    push();
    fill("orange");
    stk1.display();
    pop();

    stk.display();
    push();
    fill(110,25,25);
    stk2.display();
    stk17.display();
    stk3.display();
    stk4.display();
    stk14.display();
    stk13.display();
    stk12.display();
    stk11.display();
    stk7.display();
    stk9.display();
    stk10.display();
    pop();
  
    stk15.display();
    stk19.display();
    stk8.display();

    push();
    fill("lightblue");
    stk6.display();
    stk5.display();    
    stk18.display();    
    stk16.display();
    stk20.display();
    stk21.display();
    pop();

    push();
    fill(110,25,25);
    stk22.display();
    stk23.display();
    pop();

    text("LIFT",843,290)
    text("MORDERN CASTLE",50,200)
    text("GARAGE",330,449);

   // drawSprites();
}