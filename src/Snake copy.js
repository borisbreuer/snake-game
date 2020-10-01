import { canvas, c, log } from "./helper";

export default class Text {
  constructor(text) {
    this.txt = text;
    this.tWidth = c.measureText(this.txt).width / 2;
    this.gradient;
  }

  draw() {
    c.save();
    c.font = "normal bold 72px Consolas";

    this.gradient = c.createLinearGradient(
      canvas.width / 2 - this.tWidth,
      0,
      canvas.width / 2 + this.tWidth,
      0
    );
    gradient.addColorStop("0", "rgb(0, 200, 0)");
    gradient.addColorStop("0.5", "rgb(255, 127, 0)");
    gradient.addColorStop("1", "rgb(0, 200, 0)");

    c.shadowColor = "black";
    c.shadowBlur = 15;

    c.fillStyle = gradient;
    c.lineWidth = 2;
    c.fillText(
      this.txt.toLocaleUpperCase(),
      canvas.width / 2 - this.tWidth,
      canvas.height / 2 + 20
    );
    c.restore();
  }
}
