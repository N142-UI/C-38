var cars,car1,car2,car3,car4;
var allPlayers
var distance = 0
var canvas;
var gameState = 0;
var database;
var playerCount;
var form,game,player;

function setup() {
  canvas = createCanvas(displayWidth-20,displayHeight-30)
  database = firebase.database();
  game = new Game()
  game.getState()
  game.start()
}

function draw () {

  if(playerCount === 4){
    game.update(1)
  }
  if(gameState === 1){
    clear()
    game.play()
  }
  
}