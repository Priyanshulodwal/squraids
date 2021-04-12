var fixedRect,movingRect,blockRect;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  blockRect= createSprite(300, 200, 80, 30);
}

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;





 if (isTouching(movingRect,blockRect))
  {
  movingRect.shapeColor="red";
  blockRect.shapeColor="red";

 }
else{movingRect.shapeColor="blue";
blockRect.shapeColor="blue";
fixedRect.shapeColor="blue";
}
 
  

 

  drawSprites()}
 function isTouching(movingRect,fixedRect) {
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)
    {
     return true
    
  }
  else{
 
    return false
  }



 }
