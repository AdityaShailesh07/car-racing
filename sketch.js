var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;


var form, player, game;
var car1,car1Img, car2,car2Img, car3,car3Img, car4,car4Img,cars,trackImg,Ground;
function preload(){
car1Img = loadImage("images/car1.png");
car2Img = loadImage("images/car2.png");
car3Img = loadImage("images/car3.png");
car4Img = loadImage("images/car4.png");
trackImg = loadImage("images/track.jpg");
Ground = loadImage("images/ground.png");




}
function setup(){
  canvas = createCanvas(displayWidth-2, displayHeight-2);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
    
  }
}