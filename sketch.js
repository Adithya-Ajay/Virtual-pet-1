var dog,happyDog,database,foodS,foodStock

function preload()
{
	dog = loadImage(images/dogImg.png)
  happydog1 = loadImage(images/dogImg.png)
}

function setup() {
	createCanvas(500,500);

  
}


function draw() {  

  drawSprites();
 
  background (46, 139, 87) 

  if(keyWentDown(UP_ARROW)){

    writeStock(foods)
    dog.addImage(dogHappy)

  }

}



