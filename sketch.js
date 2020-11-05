var car;
var wall;

var speed;
var weight;
function setup() {
  createCanvas(windowWidth , windowHeight);

  speed = random(55 , 90);
  weight = (400 , 1500);

  car = createSprite(width/4 - 250, height/2 , 40 , 40);
  car.shapeColor = "white";

  wall = createSprite(1150 , 300 , 40 , 350);
  wall.shapeColor = color(90,90,90);
}

function draw() {
  background(0 ,0 ,0);  

  car.velocityX = speed;

  if(wall.x - car.x < (car.width + wall.width)/2){
     car.velocityX = 0;
     var deformation = 0.5 * width * speed * speed/22509;

     if(deformation>180){
        car.shapeColor = color(255 , 0 , 0);
     }

     if(deformation < 180 && deformation > 100){
       car.shapeColor = color(230 , 230 , 0);
     }

     if(deformation < 100){
       car.shapeColor = color(0 , 255 , 0);
     }
  }

  car.depth = car.depth+1;

  drawSprites();
}