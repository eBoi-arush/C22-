const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground= Bodies.rectangle(200,395,400,10,ground_options);
    World.add(world,ground);

    var ballOptions ={
        restitution: 1
    }
    ball = Bodies.circle(200,200,10,ballOptions);
    World.add(world,ball);


    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,10);

    ellipse(ball.position.x,ball.position.y,20,20);
}
