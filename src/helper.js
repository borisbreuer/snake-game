const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

const random = (min, max) => Math.random() * (max - min) + min;

const log = (...val) => {
  console.log(...val);
};

const div = 20;
let countCol = 0;
let countRow = 0;
let font = "bold 72px Arial";

const gameOver = () => {
  // Game Over
  c.save()
  c.font = "bold 72px Arial";
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
  c.restore()
};

const pause = () => {
  c.save()
  c.font = "bold 72px Arial";
  let txt = "Pause ...";
  let tWidth = c.measureText(txt).width / 2;

  let gradient = c.createLinearGradient(canvas.width / 2 - tWidth, 0, canvas.width / 2 + tWidth, 0);
  gradient.addColorStop("0", "rgb(0, 200, 0)");
  gradient.addColorStop("0.5", "rgb(255, 127, 0)");
  gradient.addColorStop("1", "rgb(0, 200, 0)");

  c.shadowColor = "black";
  c.shadowBlur = 15;

  c.fillStyle = gradient;
  c.lineWidth = 2;
  c.fillText(txt, canvas.width / 2 - tWidth, canvas.height / 2 + 20);
  c.restore()
};

const bgGrid = () => {
  c.fillStyle = "rgb(200,127,50)";
  c.fillRect(0, 0, canvas.width, canvas.height);
  let color = "rgba(200,50,30,0.3)";
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

const randomPos = () => ({
  x: Math.floor(random(0, canvas.width / div)) * div,
  y: Math.floor(random(0, canvas.height / div)) * div
});

const spawnFood = foodPos => {
  c.fillStyle = "rgb(255,10,10)";
  c.fillRect(foodPos.x + 2, foodPos.y + 2, div - 4, div - 4);
};

export { log, canvas, c, random, gameOver, pause, bgGrid, div, randomPos, spawnFood };
