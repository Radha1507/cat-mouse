var tom,cat1,cat2,cat3;
var jerry,mouse1,mouse2,mouse3;
var gardenIMG;


function preload() {
    //load the images here
    cat1=loadImage("cat1.png");
    cat2=loadAnimation("cat2.png,cat3.png");
    cat3=loadImage("cat4.png");
    
    mouse1=loadImage("mouse1.png");
    mouse2=loadAnimation("mouse2.png,mouse3.png");
    mouse3=loadImage("mouse4.png");
  
    gardenIMG=loadImage("garden.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600,10,10);
    tom.addAnimation("tom1",cat1);
    jerry=createSprite(200,600,10,10);
    jerry.addAnimation("jerry1",mouse1);
    



}

function draw() {
    

    background(gardenIMG);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < tom.width - jerry.width/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tom3", cat3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tom3");
        jerry.addAnimation("jerry3", mouse3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerry3");
    }  

    drawSprites();
    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left_arrow")){
    tom.velocityX = -5; 
    tom.addAnimation("tom2", cat2);
    tom.changeAnimation("tom2");    
    tom.scale=0.2;
    jerry.addAnimation("jerry2", mouse2);    
    jerry.changeAnimation("jerry2");
    jerry.scale=0.15
}


}





