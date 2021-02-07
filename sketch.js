const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload (){

}

function setup(){

    canvas = createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(700,593,1400);
    ground2 = new Ground(600, 330,200);
    ground3 = new Ground(1100,220,240);
    // 1st set

    // top
    block1 = new Block2(600, 222);

    //level 3
    block2 = new Block4(540, 302);
    block3 = new Block4(570, 302);
    block4 = new Block4(600, 302);
    block5 = new Block4(630, 302);
    block6 = new Block4(660, 302);

    //level 2
    block7 = new Block3(570, 262);
    block8 = new Block3(600, 262);
    block9 = new Block3(630, 262);
    
    // 2  set
    // level 4
    block10 = new Block4(1010,193);
    block11 = new Block4(1040,193);
    block12 = new Block4(1070,193);
    block13 = new Block4(1100,193);
    block14 = new Block4(1130,193);
    block15 = new Block4(1160,193);
    block16 = new Block4(1190,193);

    // level 3
    block17 = new Block3(1040,153);
    block18 = new Block3(1070,153);
    block19 = new Block3(1100,153);
    block20 = new Block3(1130,153);
    block21 = new Block3(1160,153);

    // level 2
    block22 = new Block2(1070,113);
    block23 = new Block2(1100,113);
    block24 = new Block2(1130,113);

    // level 1
    block25 = new Block1(1100,73);

    //hexagon 
    hexagon1 = new Shooter(200,200,40,40);

    //sling
    sling2 = new Sling(hexagon1.body,{x: 200,y:200});

}

function draw(){
    background(0);
    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();

    block1.display();

    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    block7.display();
    block8.display();
    block9.display();

    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    block22.display();
    block23.display();
    block24.display();

    block25.display();

    hexagon1.display();

    sling2.display();

}

function mouseDragged(){
    Matter.Body.setPosition(hexagon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling2.fly();
}