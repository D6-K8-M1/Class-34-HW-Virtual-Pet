//Create variables here

var dog;
var happyDog;
var database
var foodS
var foodStock

function preload()
{
  //load images here
  
  var dog = loadImg("dogImg.png");
  var happyDog = loadImg("dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() { 
  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  readStock();
  writeStock();


  drawSprites();

  textSize(4);
  fill(blue);
  stroke(0.5);
  text("Note: Press UP ARROW KEY TO FEED THE DOG MILK", 128, 300);
  //add styles here

}

function readStock(data){
  foodS=data.val();
} 

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



