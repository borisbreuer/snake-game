import { canvas, c, random, log } from "./helper";
import Snake from "./Snake";

canvas.width = 600;
canvas.height = 600;

let score = 0;
let dir = null;
let div = 20;
let countCol = 0;
let countRow = 0;
let foodPos;

const snake = new Snake(0, 0, 10, [200, 200, 200]);

const randomFoodPos = () => {
  let x = Math.floor(random(0, canvas.width / div));
  let y = Math.floor(random(0, canvas.height / div));
  return { x, y };
};

foodPos = randomFoodPos();

const spawnFood = () => {
  c.fillStyle = "rgb(200,20,20)";
  c.fillRect(foodPos.x * div, foodPos.y * div, div, div);
};

const gameOver = () => {
  // Game Over
  c.save();
  c.font = "normal bold 72px Consolas";

  let txt = "Game Over";
  let tWidth = c.measureText(txt).width / 2;

  let gradient = c.createLinearGradient(canvas.width / 2 - tWidth, 0, canvas.width / 2 + tWidth, 0);
  gradient.addColorStop("0", "hsl(327, 100%, 60%)");
  gradient.addColorStop("0.5", "hsl(216, 100%, 50%)");
  gradient.addColorStop("1", "hsl(193, 100%, 60%)");

  c.shadowColor = "black";
  c.shadowBlur = 15;

  c.strokeStyle = gradient;
  c.lineWidth = 2;
  c.strokeText(txt, canvas.width / 2 - tWidth, canvas.height / 2 + 20);
  c.restore();
};

const bgGrid = () => {
  c.fillStyle = "rgb(0,0,0)";
  c.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < canvas.width; i++) {
    for (let j = 0; j < canvas.height; j++) {
      if (countCol % 2 == 0 && countRow % 2 == 1) {
        c.fillStyle = "rgb(20,20,20)";
        c.fillRect(i * div, j * div, div, div);
      } else if (countCol % 2 == 1 && countRow % 2 == 0) {
        c.fillStyle = "rgb(20,20,20)";
        c.fillRect(i * div, j * div, div, div);
      }
      countRow++;
    }
    countCol++;
  }
};

const game = setInterval(() => {
  if (snake.tailCollision()) {
    log("GAME OVER");
    gameOver();
    clearInterval(game);
  }
  if (snake.borderCollision()) {
    log("Game OVER");
    gameOver();
    clearInterval(game);
  }
  bgGrid();
  spawnFood();
  snake.update(dir);

  if (snake.x == foodPos.x * div && snake.y == foodPos.y * div) {
    score++;
    snake.addBody();
    foodPos = randomFoodPos();
  }
}, 150);

const direction = e => {
  if (e.key == "ArrowLeft" && dir != "RIGHT") {
    dir = "LEFT";
  } else if (e.key == "ArrowUp" && dir != "DOWN") {
    dir = "UP";
  } else if (e.key == "ArrowRight" && dir != "LEFT") {
    dir = "RIGHT";
  } else if (e.key == "ArrowDown" && dir != "UP") {
    dir = "DOWN";
  } else if (e.key == " ") {
    dir = "STOP";
  }
};
document.addEventListener("keydown", direction);
