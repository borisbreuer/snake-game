const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

const random = (min, max) => Math.random() * (max - min) + min;

const log = (...val) => {
  console.log(...val);
};

export { log, canvas, c, random };
