import { canvas, c, log } from "./helper";

export default class Snake {
  constructor(x, y, r, color) {
    this.offset = 2;
    this.x = x;
    this.y = y;
    this.r = r - this.offset;
    this.color = color;
    this.vel = {
      x: (this.r + this.offset) * 2,
      y: (this.r + this.offset) * 2
    };

    this.alpha = 1;
    this.snake = [];
    this.bodyLength = 0;
    this.dirVal = "";
  }

  draw() {
    for (let i = 0; i < this.snake.length; i++) {
      if (i != this.snake.length - 1) {
      }
      let modulo = i % 2;
      let color = modulo == 0 ? [0, 100, 0] : [0, 150, 0];
      let pos = this.snake[i];
      c.fillStyle = `rgba(${color}, ${(0.75 / this.snake.length) * (i + 4)})`;
      c.lineWidth = 1;
      c.strokeStyle = `rgba(0,200,0, 1)`;
      c.beginPath();
      c.arc(
        pos.x + this.r + this.offset,
        pos.y + this.r + this.offset,
        this.r,
        0,
        Math.PI * 2,
        false
      );
      c.stroke();
      c.fill();
      c.closePath();
    }

    c.fillStyle = `rgba(20,200,20, ${this.alpha})`;
    c.lineWidth = 1;
    c.strokeStyle = `rgba(0,100,0, 1)`;
    c.beginPath();
    c.arc(
      this.x + this.r + this.offset,
      this.y + this.r + this.offset,
      this.r,
      0,
      Math.PI * 2,
      false
    );
    c.stroke();
    c.fill();
    c.closePath();
  }

  update() {
    if (this.bodyLength > 0) this.createBody();
    this.move();
    this.draw();
  }

  move() {
    if (this.dirVal == "LEFT" && this.dirVal != "RIGHT") {
      this.x -= this.vel.x;
    } else if (this.dirVal == "UP" && this.dirVal != "DOWN") {
      this.y -= this.vel.y;
    } else if (this.dirVal == "RIGHT" && this.dirVal != "LEFT") {
      this.x += this.vel.x;
    } else if (this.dirVal == "DOWN" && this.dirVal != "UP") {
      this.y += this.vel.y;
    } else if (this.dirVal == "STOP") {
      // Stopp
    }
  }

  createBody() {
    if (this.dirVal != "STOP") {
      if (this.snake.length >= this.bodyLength) {
        this.snake.splice(0, 1);
      }
      this.snake.push({ x: this.x, y: this.y });
    }
  }

  addBody() {
    this.bodyLength += 1;
  }

  tailCollision() {
    for (let i = 0; i < this.snake.length; i++) {
      if (this.x == this.snake[i].x && this.y == this.snake[i].y && i != this.snake.length - 1)
        return true;
    }
    return false;
  }

  borderCollision() {
    if (this.x < 0 || this.x >= canvas.width || this.y < 0 || this.y >= canvas.height) {
      return true;
    }
    return false;
  }
}
