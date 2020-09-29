import { canvas, c, log } from "./helper";

export default class Snake {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.vel = {
      x: this.r * 2,
      y: this.r * 2
    };

    this.alpha = 1;
    this.snake = [];
    this.bodyLength = 0;
  }

  draw() {
    for (let i = 0; i < this.snake.length; i++) {
      let pos = this.snake[i];
      c.fillStyle = `rgba(${this.color}, ${(this.alpha / this.snake.length) * (i + 2)})`;
      c.beginPath();
      c.arc(pos.x + this.r, pos.y + this.r, this.r, 0, Math.PI * 2, false);
      c.fill();
      c.closePath();
    }

    c.fillStyle = `rgba(200,0,0, ${this.alpha})`;
    c.beginPath();
    c.arc(this.x + this.r, this.y + this.r, this.r, 0, Math.PI * 2, false);
    c.fill();
    c.closePath();
  }

  update(dir) {
    this.draw();
    this.move(dir);
    this.createBody(dir);
  }

  move(dir) {
    // this.snake.pop();
    if (dir == "LEFT" && dir != "RIGHT") {
      this.x -= this.vel.x;
    } else if (dir == "UP" && dir != "DOWN") {
      this.y -= this.vel.y;
    } else if (dir == "RIGHT" && dir != "LEFT") {
      this.x += this.vel.x;
    } else if (dir == "DOWN" && dir != "UP") {
      this.y += this.vel.y;
    } else if (dir == "STOP") {
      // Stopp
    }
  }

  createBody(dir) {
    if (dir != "STOP") {
      if (this.snake.length > this.bodyLength) {
        this.snake.splice(0, 1);
      }
      this.snake.push({ x: this.x, y: this.y });
    }
  }

  addBody() {
    this.bodyLength += 1;
  }

  collisionBorder() {
    if (this.x - this.r < 0 || this.x + this.r > canvas.width) {
      this.vel.x *= -1;
    }
    if (this.y - this.r < 0 || this.y + this.r > canvas.height) {
      this.vel.y *= -1;
    }
  }
}
