import { canvas, c, random, gameOver, bgGrid, randomPos, spawnFood, pause, log } from "./helper";
import Snake from "./Snake";

canvas.width = 600;
canvas.height = 600;

let gameState = "RUN";

let animationID, foodPos, snakePos, snake, score, speed;

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
        score++;
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
  speed = 150;
  scoreEl.textContent = score;
  foodPos = randomPos();
  snakePos = randomPos();
  snake = new Snake(snakePos.x, snakePos.y, 10, [200, 200, 200]);
  animate();
};

init();

function direction(e) {
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
    animate();
    gameState = "RUN";
  } else if (e.key.toLocaleLowerCase() == "s" && gameState == "STOP") {
    init();
    snake.dirVal = "STOP";
  }
}

document.addEventListener("keydown", direction, false);
