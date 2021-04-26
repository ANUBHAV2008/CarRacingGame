class Game{
    constructor(){
    
    
    }
    getGameState(){
     var gameStateRef = database.ref("gameState");
     gameStateRef.on("value",function(data){
        gameState = data.val()   
     })  
    }
     updateGameState(state){
        database.ref("/").update({
        "gameState": state
        })
     }
     async start(){
    if(gameState ===0){
      form = new Form()
      form.display();
      player = new Player()
      player.getPlayerCount();


    }
    car1 = createSprite(400,450,25,10)
    car1.addImage(car1Image)
    car2 = createSprite(600,450,25,10)
    car2.addImage(car2Image)
    car3 = createSprite(825,450,25,10)
    car3.addImage(car3Image)
    car4 = createSprite(1050,450,25,10)
    car4.addImage(car4Image)
    cars = [car1,car2,car3,car4]
     }
     play(){
        image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)
   Player.getPlayerDetails();
   player.getCarPositionAtTheEnd();
   form.hide();
   if(allPlayers !=null){
      var y =100;
      var index = 0;
      var distance =0;
   for(var p in allPlayers){
      distance = displayHeight-allPlayers[p].distance
      index = index+1;
      cars[index-1].y=distance
      if(player.index === index){
         fill("red")
         cars[index-1].shapeColor = "red";
         camera.position.x = displayWidth/2;
         camera.position.y = cars[index-1].y;
      }
      else{
         fill("black")
      }
      text("name="+allPlayers[p].name+" : "+allPlayers[p].distance,100,y)
      y = y+20;
   }
}
if(keyDown(UP_ARROW)&&player.index !=null){
   player.distance +=10
   player.updatePlayerDetails();
}
if(player.distance>=4400){
   gameState = 2;
   player.rank+=1;
Player.updateCarPositionAtTheEnd(player.rank);
}
drawSprites();
     }
     end(){
console.log("end");
console.log(player.rank);
     }
    }