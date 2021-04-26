var database;
var form;
var player;
var allPlayers;
var game;
var playerCount = 0;
var gameState = 0;
var car1,car2,car3,car4;
var car1Image;
var car2Image;
var car3Image;
var car4Image;
var cars;
var trackImage;

function preload(){
car1Image = loadImage("images/car1.png")
car2Image = loadImage("images/car2.png")
car3Image = loadImage("images/car3.png")
car4Image = loadImage("images/car4.png")
trackImage = loadImage("images/track.jpg")

}
function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    console.log(database);
    game = new Game()
    game.getGameState()
    game.start()

}
function draw(){
    background("white");
    if(playerCount===4){
        gameState =1
    game.updateGameState(gameState)
    }
    if(gameState ===1){
        game.play();
    }
    if(gameState ===2){
        game.end();
    }
}