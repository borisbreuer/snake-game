import { canvas, c, log } from "./helper";
import Snake from "./Snake";

canvas.width = 600;
canvas.height = 600;

let step = 10;
let dir = null;
let div = 20;
let countCol = 0;
let countRow = 0;

const snake = new Snake(0, 0, 10, [200, 200, 200]);

const animate = () => {
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

  c.fillStyle = "rgb(20,200,20)";
  c.fillRect(10 * div, 4 * div, div, div);

  snake.update(dir);
  if (snake.x == 10 * div && snake.y == 4 * div) {
    snake.addBody();
  }
};
setInterval(animate, 200);
animate();

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
