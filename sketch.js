var space , spaceImg;
var rocket,rocketImg
var star,starImg
var ob , obImg;
var obG , starG;
var score = 0;
var stars = 0;
var PLAY = 1;
var END = 0
var gameState = "PLAY"
var press , psImg;
var sg,sgImg;
var restart,restartImg;



function preload(){

    spaceImg = loadImage("space.png");
    rocketImg = loadImage("roc2.jpeg");
    starImg = loadImage("start.jpeg");
    obImg = loadImage("ob.jpeg");
    psImg = loadImage("pressstart.jpeg");
    sgImg = loadImage("sg1.jpeg");
    restartImg = loadImage("rs.jpeg")


}

function setup() {

    createCanvas(600,600);

    space = createSprite(300,300);
    space.addImage(spaceImg);
    space.velocityY = 5
    

    rocket = createSprite(200,200,50,50);
    rocket.addImage(rocketImg);
    rocket.scale = 0.3;

  //  press = createSprite(200,140);
    //press.addImage(psImg);

    sg = createSprite(300,300);
    sg.scale = 3
    sg.addImage(sgImg);
    sg.visible = false;

    restart = createSprite(300,400);
  restart.addImage(restartImg);
  restart.scale=0.2
  restart.visible=false;


 

    
    

    


    obG = new Group();
    starG = new Group();

    
 
}

function draw() {

  //if(mousePressedOver(press)){
    //gameState = PLAY
  //}

 

    if(gameState === "PLAY") {

      
      

      

      if(keyDown("left_arrow")){
        rocket.x = rocket.x - 3;
       }
       
       if(keyDown("right_arrow")){
         rocket.x = rocket.x + 3;
       }
       
       if(keyDown("space")){
         rocket.velocityY = -10;
       }
    
       if(space.y>400){
         space.y = space.height/2
       }

       score = score + Math.round(getFrameRate()/60);
    
    
       rocket.velocityY = rocket.velocityY + 0.8
 //climbersGroup.collide(ghost);
        if(starG.isTouching(rocket)){
            starG.destroyEach()
            stars = stars+ 1
        }
        if(obG.isTouching(rocket)||rocket.y > 600){
          gameState = END;

          sg.visible=true;
          restart.visible=true;

          obG.destroyEach();
          starG.destroyEach();

          obG.setLifetimeEach(-1);
        starG.setLifetimeEach(-1);

        starG .setVelocityY=0;
        obG .setVelocityY=0;
        }

        spawnStar();
        spawnOb();

        drawSprites();
          
       if(mousePressedOver(restart)){
         reset();
       }
    



  textSize(30);
  fill("white")
  text.shapeColor="red"
  text("Score: "+ score, 270,30);

  textSize(30);
  fill("white")
  text("stars: "+ stars, 500,30);


  
 
}
}


function spawnStar(){
if(frameCount%100===0){
 var star = createSprite(200, -50);
 star.addImage(starImg)
 star.velocityY = 5
 star.scale=0.3
 star.x = Math.round(random(10,600));
 star.lifetime = 400
 starG.add(star);

 
}
}

function spawnOb(){
    if(frameCount%50===0){

      var ob = createSprite(200, -50);
     ob.addImage(obImg)
     ob.velocityY = 7
     ob.scale=1
    ob.lifetime = 400
     ob.x = Math.round(random(10,600));
    obG.add(ob)

    }
  }


function reset(){

  gameState=PLAY;

  restart.visible = false;
  sg.visible = false;

  score = 0
}
