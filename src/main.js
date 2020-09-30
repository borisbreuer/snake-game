import { canvas, c, random, log } from "./helper";
import Snake from "./Snake";

canvas.width = 600;
canvas.height = 600;

let gameState = "RUN";
let score = 0;
let div = 20;
let countCol = 0;
let countRow = 0;
let foodPos;

let scoreEl = document.querySelector("#scoreEl");
const snake = new Snake(0, 0, 10, [200, 200, 200]);

const randomFoodPos = () => {
  let x = Math.floor(random(0, canvas.width / div));
  let y = Math.floor(random(0, canvas.height / div));
  return { x, y };
};

foodPos = randomFoodPos();

const spawnFood = () => {
  c.fillStyle = "rgb(255,10,10)";
  c.fillRect(foodPos.x * div + 2, foodPos.y * div + 2, div - 4, div - 4);
};

const gameOver = () => {
  // Game Over
  c.save();
  c.font = "normal bold 72px Consolas";

  let txt = "Game Over";
  let tWidth = c.measureText(txt).width / 2;

  let gradient = c.createLinearGradient(canvas.width / 2 - tWidth, 0, canvas.width / 2 + tWidth, 0);
  gradient.addColorStop("0", "rgb(0, 200, 0)");
  gradient.addColorStop("0.5", "rgb(255, 127, 0)");
  gradient.addColorStop("1", "rgb(0, 200, 0)");

  c.shadowColor = "black";
  c.shadowBlur = 15;

  c.fillStyle = gradient;
  c.lineWidth = 2;
  c.fillText(txt.toLocaleUpperCase(), canvas.width / 2 - tWidth, canvas.height / 2 + 20);
  c.restore();
};

const bgGrid = () => {
  c.fillStyle = "rgb(200,127,50)";
  c.fillRect(0, 0, canvas.width, canvas.height);
  let color = "rgba(255,255,255,0.1)";
  for (let i = 0; i < canvas.width; i++) {
    for (let j = 0; j < canvas.height; j++) {
      if (countCol % 2 == 0 && countRow % 2 == 1) {
        c.fillStyle = color;
        c.fillRect(i * div, j * div, div, div);
      } else if (countCol % 2 == 1 && countRow % 2 == 0) {
        c.fillStyle = color;
        c.fillRect(i * div, j * div, div, div);
      }
      countRow++;
    }
    countCol++;
  }
};

const game = setInterval(() => {
  if (gameState == "STOP") clearInterval(game);
  bgGrid();

  if (gameState == "STOP") {
    gameOver();
    return;
  }
  snake.update();
  if (snake.x == foodPos.x * div && snake.y == foodPos.y * div) {
    foodPos = randomFoodPos();
    snake.addBody();
    score++;
    scoreEl.textContent = score;
  }
  spawnFood();

  if (snake.tailCollision()) {
    gameState = "STOP";
  }
  if (snake.borderCollision()) {
    gameState = "STOP";
  }
}, 300);

function direction(e) {
  if (e.key == "ArrowLeft" && snake.dirVal != "RIGHT") {
    snake.dirVal = "LEFT";
  } else if (e.key == "ArrowUp" && snake.dirVal != "DOWN") {
    snake.dirVal = "UP";
  } else if (e.key == "ArrowRight" && snake.dirVal != "LEFT") {
    snake.dirVal = "RIGHT";
  } else if (e.key == "ArrowDown" && snake.dirVal != "UP") {
    snake.dirVal = "DOWN";
  } else if (e.key == " ") {
    snake.dirVal = "STOP";
  }
}

document.addEventListener("keydown", direction, false);
