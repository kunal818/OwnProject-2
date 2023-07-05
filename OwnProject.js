let player
let obstacles = [];
let score = 0;
let isGameOver = false;

function setup() {
  createCanvas(400,400);
  player = Player();
}

function draw() {
  background(220);
  if ( !isGameOver){  
  player.update();
  player.show()
  spawmObstacles()
updateObstacles()
handleCollision()
displayScore}();
} else {
  gameOver{};
}

function spawmObstacles(){
  if(frameCount % 60 === 0){
    let obstacles = new Obstacles();
    obstacles.push(obstacles);
  
  }
}

function updateObstacles() {
  for(let i = obstacles.length - 1)
}

class Player {
  constructor() {
    this.x = 50;
    this.y = height / 2;
    this.size = 20;
    this.velocityY = 0;
    this.gravity = 0.6;
  }


update(){
  this.velocityY += this.gravity;
  this.y += this.velocityY;
}

if (this.y >=height - this.size) {
  this.y = height - this.size;
  this.velocityY = 0
}
}
show(){

  fill(255,0,0);
  rect(this.x, this.y, this.size, this.size)
}

jump(){
  if(this.y === height - this.size){
    this.velocityY = -15
  }
}

collideWith(obstacles) {
  let playerLeft = this.x;
  let playerRight = this.x + this.size;
  let playerTop = this.y;
  let playerBottom = this.y + this.size;
}
