
var maxNumPowers = 3, powersCollected = 0;
var maxFirePoints = 4, pointsCollected = 0;
var maxWaterPoints = 4, points = 0;

//moving platform only if some player steps on button2 or 3 then only it platform will stop at button
//write if function for game win 
// if you collect all the points it will be 3 stars
//create the form with name  box play button and instructions to play reset button
//update the score in the database by adding up the stars
//button for leader board show top 5 scorers

function preload() {
  trollImg = loadImage("images/rpgcharacter_18.png");
  beamImg = loadImage("images/gameplayobject_arrow_02.png");
  powerPadImg = loadImage("images/powerupBlue_bolt.png");
  watergirlImg = loadImage("images/gameplayadventure_04.png");
  exitImg = loadImage("images/exit.png");
  fireImg = loadImage("images/fire.jpeg");
  brickImg = loadImage("images/BrickWall.jpeg")

}

function setup() {
  createCanvas(1400,740);
  troll=createSprite(1360,230,10,10);
  troll.addImage(trollImg);
  troll.scale = 0.3;
  
  beam = createSprite(108,185); 
  beam.addImage(beamImg)
  beam.scale = 0.1;
  beam.visible = false;
  
  watergirl=createSprite(100,690);
  watergirl.addImage(watergirlImg);
  watergirl.scale = 0.10; 
  
  fireboy=createSprite(90,590);
  fireboy.addImage(fireImg); 
  fireboy.scale = 0.15;


b1 = createSprite(700,30,1370,10);
b1.shapeColor = "white "

b2 = createSprite(20,375,10,700);
b2.shapeColor = "white"

floor = createSprite(700,720,1370,10);
floor.shapeColor = "white"

b4 = createSprite(1390,375,10,700);
b4.shapeColor = "white"

b5 = createSprite(710,500,1370,10);
b5.shapeColor = "white"

b6 = createSprite(890,300,1000,10);
b6.shapeColor = "white"

b7 = createSprite(120,300,200,10)
b7.shapeColor = "white"

b8 = createSprite(90,620,150,10);
b8.shapeColor = "white"

b9 = createSprite(1250,170,270,10);
b9.shapeColor = "darkRed"



invisibleWall = createSprite(1000,170,20,240);
invisibleWall.shapeColor = "black"



lava  = createSprite(500,720,100,20);
lava.shapeColor = "DarkOrange"

water = createSprite(700,720,100,20);
water.shapeColor = "darkBlue"

toxic = createSprite(900,500,100,20);
toxic.shapeColor = "darkRed"



gate1 = createSprite(700,400,70,210);
gate1.shapeColor = "lime"

firegate = createSprite(1240,115,70,100);
firegate.shapeColor = "darkOrange"

watergate = createSprite(1340,115,70,100);
watergate.shapeColor = "blue"



f1 = createSprite(500,670,20,20);
f1.shapeColor = "darkOrange"

f2 = createSprite(800,430,20,20);
f2.shapeColor = "darkOrange"

f3 = createSprite(900,240,20,20);
f3.shapeColor = "darkOrange"

f4 = createSprite(200,240,20,20);
f4.shapeColor = "darkOrange"



w1 = createSprite(700,670,20,20);
w1.shapeColor = "darkBlue"

w2 = createSprite(1000,420,20,20);
w2.shapeColor = "darkBlue"

w3 = createSprite(700,240,20,20);
w3.shapeColor = "darkBlue"

w4 = createSprite(300,430,20,20);
w4.shapeColor = "darkBlue"



BoxP1 = createSprite(1295,650,200,130);
BoxP1.shapeColor = "white"

BoxTp = createSprite(1290,580,190,10);
BoxTp.shapeColor = "purple"



button1 = createSprite(300,705,40,20);
button1.shapeColor = "lime"

button2 = createSprite(500,485,40,20);
button2.shapeColor = "cyan"

button3 = createSprite(500,285,40,20);
button3.shapeColor = "cyan"



movingPlatform  = createSprite(300,470,90,20);
movingPlatform.shapeColor ="Cyan";
movingPlatform.velocityY = -7;
movingPlatform.velocityX = 0;



firePower = createSprite(1160,690,50,50);
firePower.shapeColor = "yellow"
}

function draw() {

  background("black");
  watergirl.setVelocity(0,0);
  fireboy.setVelocity(0,0);
  troll.setVelocity(5,5)
  
  drawSprites();
  
  textSize(20);
  fill("blue")
  text("Total:",900,100);
  textSize(20);
  fill("orange")
  text(points,950,100)

  troll.bounceOff(invisibleWall);
  watergirl.collide(floor);
  watergirl.collide(b1);
  watergirl.collide(b2);
  watergirl.collide(b9);
  watergirl.collide(b4);
  watergirl.collide(b5);
  watergirl.collide(b6);
  watergirl.collide(b7);
  watergirl.collide(b8);
  watergirl.collide(BoxP1);

  fireboy.collide(floor);
  fireboy.collide(b1)
  fireboy.collide(b2)
  fireboy.collide(b9)
  fireboy.collide(b4)
  fireboy.collide(b5)
  fireboy.collide(b6)
  fireboy.collide(b7)
  fireboy.collide(b8)
  fireboy.collide(BoxP1);

  troll.bounceOff(b4)
  troll.bounceOff(b5)
  troll.bounceOff(b6)
  troll.bounceOff(b7)
  troll.bounceOff(b8)
  

  if (gate1.visible){
        watergirl.bounceOff(gate1)
        fireboy.bounceOff(gate1);
  }
  
  if (keyDown("UP_ARROW")) {
      watergirl.velocityY = -6  }
  if (keyDown("LEFT_ARROW")) {
    watergirl.setVelocity(-6,0);
  }
  if (keyDown("RIGHT_ARROW")) {
    watergirl.setVelocity(6,0);
  }
  if(keyDown("DOWN_ARROW")){
    watergirl.setVelocity(0,6)
  }

  if(keyDown("w")){
    fireboy.setVelocity(0,-6);
  }
  if(keyDown("a")){
    fireboy.setVelocity(-6,0)
  }
  if(keyDown("d")){
    fireboy.setVelocity(6,0) 
  }
  if(keyDown("s")){
    fireboy.setVelocity(0,6)
  }
  fireboy.velocityY +=1.5;
  watergirl.velocityY += 1.5;

  if (watergirl.isTouching(button1)||fireboy.isTouching(button1)){
    gate1.destroy();
  }
      
  if (watergirl.isTouching(lava) || watergirl.isTouching(toxic) ||watergirl.isTouching(troll)){   
      watergirl.x = 100;
      watergirl.y = 690;
  }
  if(fireboy.isTouching(toxic)||fireboy.isTouching(water)||fireboy.isTouching(troll)){
    fireboy.x = 90  
    fireboy.y = 590 
  }
  if (fireboy.isTouching(BoxTp)){
    fireboy.x = 1284
    fireboy.y = 476
  }
  text(mouseX+","+mouseY,mouseX,mouseY)
  if (watergirl.isTouching(BoxTp)){
    watergirl.x = 1284
    watergirl.y = 476
  }
  movingPlatform.bounceOff(b1);
  movingPlatform.bounceOff(b5);
  
  if(fireboy.isTouching(button2)||watergirl.isTouching(button2)||fireboy.isTouching(button3)||watergirl.isTouching(button3)){
    movingPlatform.velocityY = 0
  }
  else{
    movingPlatform.velocityY = -7
    movingPlatform.veloctyX = 0
  }
  
  if (watergirl.isTouching(firePower)||fireboy.isTouching(firePower)){
    firePower.destroy();
    powersCollected++;
  }

  if (troll.isTouching(invisibleWall)){
    troll.velocityY = 7
  }
  if(troll.isTouching(b4)){
    troll.velocityX = -7
  }
  if(troll.isTouching(b6)){
    troll.velocityX = 7
  }
  if(troll.isTouching(b9)){
    troll.velocityY = -7
  }


/*
  if(watergirl.isTouching(w1)||watergirl.isTouching(w2)||watergirl.isTouching(w3)||watergirl.isTouching(w4) ){
    points +=1
    w1.destroy();
  }
  
  if(fireboy.isTouching(f1)||fireboy.isTouching(f2)||fireboy.isTouching(f3)||fireboy.isTouching(f4)){
    pointsCollected ++;
    f1.destroy();
  }
  
*/
watergirl.collide(w1,calculatePoints)
watergirl.collide(w2,calculatePoints)
watergirl.collide(w3,calculatePoints)
watergirl.collide(w4,calculatePoints)

fireboy.collide(f1,calculatePoints)
fireboy.collide(f2,calculatePoints)
fireboy.collide(f3,calculatePoints)
fireboy.collide(f4,calculatePoints)


  if (keyDown("f") && powersCollected> 0){
    beam.x = watergirl.x + 10;
    beam.y = watergirl.y;
    beam.x = fireboy.x
    beam.y = fireboy.y
    beam.visible = true;
    beam.velocityX = 5;
    powersCollected--;
  }
  
  if (troll.isTouching(beam)){
    troll.destroy();
    beam.destroy();
   
  }
  if (beam.velocityX!==0 && beam.isTouching(b2)){
    beam.destroy();    
  }
  if (watergirl.isTouching(watergate)||fireboy.isTouching(firegate)){
    watergirl.visible = false;
    troll.visible = false;
    gate1.visible = false;
    button1.visible = false;
    beam.visible = false;
    powerPad.visible = false;
    exit.visible = false;
    lava.visible = false;
    lava2.visible = false;
    lava3.visible = false;
    b1.visible = false;   
    b2.visible = false;  
    b3.visible = false;
    fireboy.visible = false;
    
  }
  

}
function calculatePoints(char,pointSprite){
points++;
pointSprite.destroy();

}