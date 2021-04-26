class Form{
constructor(){
    this.input = createInput("Enter name")
    this.button = createButton("PLAY")
    this.greeting = createElement("h1")
    this.reset = createButton("Reset")
}
display(){
var title = createElement("h2");
title.html("CarRacingGame")
title.position(500,50)


this.input.position(500,300)


this.button.position(550,350)

this.reset.position(900,50)

this.button.mousePressed(()=>{
 this.input.hide();
 this.button.hide();

 playerCount = playerCount+1;
 console.log(playerCount)
 player.updatePlayerCount(playerCount)
 player.index =playerCount;
 var name = this.input.value();
 player.name =name;
 player.updatePlayerDetails();
 
 this.greeting.html("Hello "+ name)
 this.greeting.position(550,300)
})
this.reset.mousePressed(()=>{
    player.updatePlayerCount(0);
    game.updateGameState(0);
   })
}
hide(){
this.greeting.hide();
 this.input.hide();
 this.button.hide();
}
}