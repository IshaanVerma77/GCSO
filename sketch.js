var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(800,400);

speed = random(55,90);
weight = random(400,1500);
thickness = random(23,88);


bullet = createSprite(50,200,50,10);

wall = createSprite(750,200,thickness,200);
//wall.shapeColor

}

function draw() {
background(0);
  
//car.collide(wall);

bullet.velocityX = speed; 


 

if(hasCollided(bullet,wall)){

bullet.velocityX = 0;

var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
 if(damage<10){
   wall.shapeColor = "green";
 }
 if(damage>10){
  wall.shapeColor = "red";
 }
}

  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false;
}