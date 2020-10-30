var dog,happydog;
var database;
var foodS,foodstock;
var button1,button2;
var fedTime,lastFed;
var foodObg;
var dogHappy;

function preload()
{
  dogimg = loadImage("images/dogImg.png");
  doghappy = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
  
  foodstock = database.ref('food');
  foodstock.on("value",readStock);

  dog = createSprite(300,150,250,150);
  dog.addImage(dogimg)
  dog.scale = 0.15
  //feed=createButton("Feed the Dog");
  //feed.position(700,95);
  //feed.mousePressed(feedDog);

  //addFood=createButton("Add Food");
  //addFood.position(8000,95);
  //addFood.mousePressed(addFoods);
  
}


function draw() {  
  background("46, 138, 87")

  drawSprites();
  
  fill("green")
  textSize(20)
  text("food"+ foodS,170,200);

//fedTime = database.ref('FeedTime');
//fedTime.on("value",function(data){
//lastFed = dat.val();
//});

  if(keyWentDown(UP_ARROW)){
    addFood(foodS);
    dog.addImage(doghappy)
    dog.scale = 0.15
  }

}

function addFood(x){
  if(x <= 0){
    x = 0;
  }
  else{x = x - 1};
  database.ref('/').update({food:x})
}

function readStock(data){
  foodS = data.val();

}

