import { canvas, c, random, gameOver, bgGrid, randomPos, spawnFood, pause, log } from "./helper";
import Snake from "./Snake";

canvas.width = 600;
canvas.height = 600;

let gameState = "RUN";

let animationID, foodPos, snakePos, snake, score, speed, scoreMax, scoreDec, scoreMin, scoreInitMax;

let scoreEl = document.querySelector("#scoreEl");

const stopAnimate = () => clearInterval(animationID);

const animate = () => {
  animationID = setInterval(() => {
    if (gameState == "PAUSE") {
      pause();
      stopAnimate();
    } else if (gameState == "RUN") {
      bgGrid();
      snake.update();
      if (snake.x == foodPos.x && snake.y == foodPos.y) {
        foodPos = randomPos();
        snake.addBody();
        score += scoreMax;
        scoreMax = scoreInitMax
        scoreEl.textContent = score;
      }
      spawnFood(foodPos);
    }
    
    /* if (score == 2) {
      stopAnimate();
      speed = 100;
      animate();
    } */
    
    if (snake.tailCollision() || snake.borderCollision()) {
      gameState = "STOP";
      gameOver();
      stopAnimate();
    }
  }, speed);
};

const init = () => {
  stopAnimate();
  gameState = "RUN";
  score = 0;
  scoreInitMax = 45;
  scoreMin = 5;
  scoreDec = 5;
  scoreMax = scoreInitMax;
  speed = 1000 / 10;
  scoreEl.textContent = score;
  foodPos = randomPos();
  snakePos = randomPos();
  snake = new Snake(snakePos.x, snakePos.y, 10, [200, 200, 200]);
  animate();
};

init();

function decreseScore(){
  if(scoreMax > scoreMin) scoreMax -= scoreDec;
}

function direction(e) {

  if(e.key == "ArrowLeft" || e.key == "ArrowUp" || e.key == "ArrowRight" || e.key == "ArrowDown"){
    decreseScore();
  }

  if (e.key == "ArrowLeft" && snake.dirVal != "RIGHT") {
    snake.dirVal = "LEFT";
  } else if (e.key == "ArrowUp" && snake.dirVal != "DOWN") {
    snake.dirVal = "UP";
  } else if (e.key == "ArrowRight" && snake.dirVal != "LEFT") {
    snake.dirVal = "RIGHT";
  } else if (e.key == "ArrowDown" && snake.dirVal != "UP") {
    snake.dirVal = "DOWN";
  } else if ((e.key == " " || e.key.toLocaleLowerCase() == "p") && gameState == "RUN") {
    // snake.dirVal = "STOP";
    gameState = "PAUSE";
  } else if ((e.key == " " || e.key.toLocaleLowerCase() == "p") && gameState == "PAUSE") {
    gameState = "RUN";
    animate();
  } else if (e.key.toLocaleLowerCase() == "s" && gameState == "STOP") {
    init();
    snake.dirVal = "STOP";
  }
}

document.addEventListener("keydown", direction, false);

const fnUP = (e)=>{
  e.preventDefault();
  if(snake.dirVal != "DOWN") snake.dirVal = "UP";
}

const fnLEFT = (e) => {
  e.preventDefault();
  if(snake.dirVal != "RIGHT") snake.dirVal = "LEFT";
}

const fnDOWN = (e) => {
  e.preventDefault();
  if(snake.dirVal != "UP") snake.dirVal = "DOWN";
}

const fnRIGHT = (e) => {
  e.preventDefault();
  if(snake.dirVal != "LEFT") snake.dirVal = "RIGHT";
}

const fnSTART = (e) => {
  e.preventDefault();
  if (gameState == "STOP") {
    init();
    snake.dirVal = "STOP";
  }
}

const fnPAUSE = (e) => {
  e.preventDefault();
  if (gameState == "RUN") {
    // snake.dirVal = "STOP";
    gameState = "PAUSE";
  } else if (gameState == "PAUSE") {
    animate();
    gameState = "RUN";
  }
}

const btnUP = document.getElementById('btn_up');
btnUP.addEventListener("touchstart", fnUP, false);
btnUP.addEventListener("mousedown", fnUP, false);

const btnLEFT = document.getElementById('btn_left');
btnLEFT.addEventListener("touchstart", fnLEFT, false);
btnLEFT.addEventListener("mousedown", fnLEFT, false);

const btnDOWN = document.getElementById('btn_down');
btnDOWN.addEventListener("touchstart", fnDOWN, false);
btnDOWN.addEventListener("mousedown", fnDOWN, false);

const btnRIGHT = document.getElementById('btn_right');
btnRIGHT.addEventListener("touchstart", fnRIGHT, false);
btnRIGHT.addEventListener("mousedown", fnRIGHT, false);

const btnStart = document.getElementById('btn_start');
btnStart.addEventListener("touchstart", fnSTART, false);
btnStart.addEventListener("mousedown", fnSTART, false);

const btnPause = document.getElementById('btn_pause');
btnPause.addEventListener("touchstart", fnPAUSE, false);
btnPause.addEventListener("mousedown", fnPAUSE, false);