const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const log = (...val) => {
  console.log(...val);
};

export { log, canvas, c };
