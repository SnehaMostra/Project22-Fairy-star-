const Engine =Matter.Engine;
const World =Matter.World;
const Bodies =Matter.Bodies;

var engine,world,fairy,star,fairyImg,starImg;

function preload()
{
   //preload the images here
   fairy = loadImage("images/fairy.png");
   fairyImg = loadAnimation("images/fairy1.png","images/fairy2.png");
   starImg = loadImage("images/star.png");
   backdrop = loadImage("images/starnight.png");
}

function setup() {
  createCanvas(800, 750);
   fairy = createSprite(120,520);
   fairy.addAnimation("fairy",fairyImg);
   fairy.scale = 0.25;

   star = createSprite(650,30);
   star.addImage(starImg);
   star.scale = 0.04;

  engine = Engine.create();
  world = engine.world;

  starbody = Bodies.circle(650,30,5,{restitution:0.5,isStatic:true});
  World.add(world,starbody);

Engine.run(engine);

}


function draw() {
  background(backdrop);

  star.x = starbody.position.x;
  star.y = starbody.position.y;

  if (starbody.position.y>470 && star.y>470){
    Matter.Body.setStatic(starbody,true);
  }
 keyPressed();
drawSprites();

}

function keyPressed(){
      if (keyDown("right")){
          fairy.x = fairy.x+10;
      }

      if (keyDown("left")){
        fairy.x = fairy.x-10;
      }

      if (keyDown("down")){
        Matter.Body.setStatic(starbody,false);
      }
}
