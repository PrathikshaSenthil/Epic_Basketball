const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase,bg;
var att,attImg;
//Declare an array for arrows playerArrows = [ ]



var playerArrows=[];

function preload(){

  bg = loadImage("./assets/bg2.gif");
  attImg = loadImage("./assets/att.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

 

  playerBase = new PlayerBase(275,550, 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 300, 280);
  playerArcher = new PlayerArcher(
   285,
    playerBase.body.position.y - 245,
    120,
    120
  );

  att=new PlayerSprite(playerArcher.body.position.x+10,playerArcher.body.position.y+20,80,200);
  

  computerBase = new ComputerBase(
    width - 250,
    300,
    150,
    50
  );
  computer = new Computer(
    width - 270,
    computerBase.body.position.y - 150,
    70,
    100
  );
  computerArcher = new ComputerArcher(
    width - 240,
    computerBase.body.position.y - 120,
    23,
    200
  );
  //Matter.Body.setVelocity();
 


}

function draw() {
  background(bg);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("🅔🅟🅘🅒", width / 2, 100);
   text("🅑🅐🅢🅚🅔🅣🅑🅐🅛🅛🏀", width / 2+20, 140);

 
  playerBase.display();
  player.display();

  playerArcher.display();
  computerArcher.display();

  computerBase.display();
  computer.display();
  
  

  att.display();
 // Use for loop to display arrow using showArrow() function
 for (var i = 0; i < playerArrows.length; i++) {
  showArrows(playerArrows[i], i);
}

}



function keyPressed() {

  if(keyCode === 32){
    // create an arrow object and add into an array ; set its angle same as angle of playerArcher
    var posX= playerArcher.body.position.x;
    var posY = playerArcher.body.position.y;
    var angle =playerArcher.body.angle+PI/2;

    var arrow = new PlayerArrow (posX,posY,20,20);
    
    arrow.trajectory=[];
    Matter.Body.setAngle(arrow.body,angle)
     playerArrows.push(arrow);
  }
}


//Display arrow and Tranjectory
function showArrows(arrows,index) {

 arrows.display();
 if (arrows.body.position.x >= width || arrows.body.position.y >= height - 50) {
  Matter.World.remove(world, arrows.body);
  playerArrows.splice(index, 1);
}
}
function keyReleased () {

  if(keyCode === 32){
    //call shoot() function for each arrow in an array playerArrows
     playerArrows[playerArrows.length - 1].shoot();

  }
}