/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Snake.js":
/*!**********************!*\
  !*** ./src/Snake.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Snake; });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\r\n\r\nclass Snake {\r\n  constructor(x, y, r, color) {\r\n    this.offset = 2;\r\n    this.x = x;\r\n    this.y = y;\r\n    this.r = r - this.offset;\r\n    this.color = color;\r\n    this.vel = {\r\n      x: (this.r + this.offset) * 2,\r\n      y: (this.r + this.offset) * 2\r\n    };\r\n\r\n    this.alpha = 1;\r\n    this.snake = [];\r\n    this.bodyLength = 0;\r\n    this.dirVal = \"\";\r\n  }\r\n\r\n  draw() {\r\n    for (let i = 0; i < this.snake.length; i++) {\r\n      if (i != this.snake.length - 1) {\r\n      }\r\n      let modulo = i % 2;\r\n      let color = modulo == 0 ? [0, 100, 0] : [0, 150, 0];\r\n      let pos = this.snake[i];\r\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = `rgba(${color},1)`;\r\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].lineWidth = 1;\r\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].strokeStyle = `rgba(0,200,0, 1)`;\r\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].beginPath();\r\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].arc(\r\n        pos.x + this.r + this.offset,\r\n        pos.y + this.r + this.offset,\r\n        this.r - 2,\r\n        0,\r\n        Math.PI * 2,\r\n        false\r\n      );\r\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].stroke();\r\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fill();\r\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].closePath();\r\n    }\r\n\r\n    _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = `rgba(20,200,20, ${this.alpha})`;\r\n    _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].lineWidth = 1;\r\n    _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].strokeStyle = `rgba(0,100,0, 1)`;\r\n    _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].beginPath();\r\n    _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].arc(\r\n      this.x + this.r + this.offset,\r\n      this.y + this.r + this.offset,\r\n      this.r,\r\n      0,\r\n      Math.PI * 2,\r\n      false\r\n    );\r\n    _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].stroke();\r\n    _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fill();\r\n    _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].closePath();\r\n  }\r\n\r\n  update() {\r\n    if (this.bodyLength > 0) this.createBody();\r\n    this.move();\r\n    this.draw();\r\n  }\r\n\r\n  move() {\r\n    if (this.dirVal == \"LEFT\" && this.dirVal != \"RIGHT\") {\r\n      this.x -= this.vel.x;\r\n    } else if (this.dirVal == \"UP\" && this.dirVal != \"DOWN\") {\r\n      this.y -= this.vel.y;\r\n    } else if (this.dirVal == \"RIGHT\" && this.dirVal != \"LEFT\") {\r\n      this.x += this.vel.x;\r\n    } else if (this.dirVal == \"DOWN\" && this.dirVal != \"UP\") {\r\n      this.y += this.vel.y;\r\n    } else if (this.dirVal == \"STOP\") {\r\n      // Stopp\r\n    }\r\n  }\r\n\r\n  createBody() {\r\n    if (this.dirVal != \"STOP\") {\r\n      if (this.snake.length >= this.bodyLength) {\r\n        this.snake.splice(0, 1);\r\n      }\r\n      this.snake.push({ x: this.x, y: this.y });\r\n    }\r\n  }\r\n\r\n  addBody() {\r\n    this.bodyLength += 1;\r\n  }\r\n\r\n  tailCollision() {\r\n    for (let i = 0; i < this.snake.length; i++) {\r\n      if (this.x == this.snake[i].x && this.y == this.snake[i].y && i != this.snake.length - 1)\r\n        return true;\r\n    }\r\n    return false;\r\n  }\r\n\r\n  borderCollision() {\r\n    if (this.x < 0 || this.x >= _helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width || this.y < 0 || this.y >= _helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height) {\r\n      return true;\r\n    }\r\n    return false;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Snake.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! exports provided: log, canvas, c, random, gameOver, pause, bgGrid, div, randomPos, spawnFood */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"log\", function() { return log; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameOver\", function() { return gameOver; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pause\", function() { return pause; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bgGrid\", function() { return bgGrid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"div\", function() { return div; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomPos\", function() { return randomPos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spawnFood\", function() { return spawnFood; });\nconst canvas = document.querySelector(\"canvas\");\r\nconst c = canvas.getContext(\"2d\");\r\n\r\nconst random = (min, max) => Math.random() * (max - min) + min;\r\n\r\nconst log = (...val) => {\r\n  console.log(...val);\r\n};\r\n\r\nconst div = 20;\r\nlet countCol = 0;\r\nlet countRow = 0;\r\nlet font = \"normal bold 72px Impact\";\r\n\r\nconst gameOver = () => {\r\n  // Game Over\r\n  c.save();\r\n  c.font = font;\r\n  let txt = \"Game Over\";\r\n  let tWidth = c.measureText(txt).width / 2;\r\n\r\n  let gradient = c.createLinearGradient(canvas.width / 2 - tWidth, 0, canvas.width / 2 + tWidth, 0);\r\n  gradient.addColorStop(\"0\", \"rgb(0, 200, 0)\");\r\n  gradient.addColorStop(\"0.5\", \"rgb(255, 127, 0)\");\r\n  gradient.addColorStop(\"1\", \"rgb(0, 200, 0)\");\r\n\r\n  c.shadowColor = \"black\";\r\n  c.shadowBlur = 15;\r\n\r\n  c.fillStyle = gradient;\r\n  c.lineWidth = 2;\r\n  c.fillText(txt.toLocaleUpperCase(), canvas.width / 2 - tWidth, canvas.height / 2 + 20);\r\n  c.restore();\r\n};\r\n\r\nconst pause = () => {\r\n  c.save();\r\n  c.font = font;\r\n  let txt = \"Pause ...\";\r\n  let tWidth = c.measureText(txt).width / 2;\r\n\r\n  let gradient = c.createLinearGradient(canvas.width / 2 - tWidth, 0, canvas.width / 2 + tWidth, 0);\r\n  gradient.addColorStop(\"0\", \"rgb(0, 200, 0)\");\r\n  gradient.addColorStop(\"0.5\", \"rgb(255, 127, 0)\");\r\n  gradient.addColorStop(\"1\", \"rgb(0, 200, 0)\");\r\n\r\n  c.shadowColor = \"black\";\r\n  c.shadowBlur = 15;\r\n\r\n  c.fillStyle = gradient;\r\n  c.lineWidth = 2;\r\n  c.fillText(txt, canvas.width / 2 - tWidth, canvas.height / 2 + 20);\r\n  c.restore();\r\n};\r\n\r\nconst bgGrid = () => {\r\n  c.fillStyle = \"rgb(200,127,50)\";\r\n  c.fillRect(0, 0, canvas.width, canvas.height);\r\n  let color = \"rgba(255,255,255,0.1)\";\r\n  for (let i = 0; i < canvas.width; i++) {\r\n    for (let j = 0; j < canvas.height; j++) {\r\n      if (countCol % 2 == 0 && countRow % 2 == 1) {\r\n        c.fillStyle = color;\r\n        c.fillRect(i * div, j * div, div, div);\r\n      } else if (countCol % 2 == 1 && countRow % 2 == 0) {\r\n        c.fillStyle = color;\r\n        c.fillRect(i * div, j * div, div, div);\r\n      }\r\n      countRow++;\r\n    }\r\n    countCol++;\r\n  }\r\n};\r\n\r\nconst randomPos = () => ({\r\n  x: Math.floor(random(0, canvas.width / div)) * div,\r\n  y: Math.floor(random(0, canvas.height / div)) * div\r\n});\r\n\r\nconst spawnFood = foodPos => {\r\n  c.fillStyle = \"rgb(255,10,10)\";\r\n  c.fillRect(foodPos.x + 2, foodPos.y + 2, div - 4, div - 4);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/helper.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Snake */ \"./src/Snake.js\");\n\r\n\r\n\r\n_helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width = 600;\r\n_helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height = 600;\r\n\r\nlet gameState = \"RUN\";\r\n\r\nlet animationID, foodPos, snakePos, snake, score, speed;\r\n\r\nlet scoreEl = document.querySelector(\"#scoreEl\");\r\n\r\nconst stopAnimate = () => clearInterval(animationID);\r\n\r\nconst animate = () => {\r\n  animationID = setInterval(() => {\r\n    if (gameState == \"PAUSE\") {\r\n      Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"pause\"])();\r\n      stopAnimate();\r\n    } else if (gameState == \"RUN\") {\r\n      Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"bgGrid\"])();\r\n      snake.update();\r\n      if (snake.x == foodPos.x && snake.y == foodPos.y) {\r\n        foodPos = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"randomPos\"])();\r\n        snake.addBody();\r\n        score++;\r\n        scoreEl.textContent = score;\r\n      }\r\n      Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"spawnFood\"])(foodPos);\r\n    }\r\n\r\n    /* if (score == 2) {\r\n      stopAnimate();\r\n      speed = 100;\r\n      animate();\r\n    } */\r\n\r\n    if (snake.tailCollision() || snake.borderCollision()) {\r\n      gameState = \"STOP\";\r\n      Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"gameOver\"])();\r\n      stopAnimate();\r\n    }\r\n  }, speed);\r\n};\r\n\r\nconst init = () => {\r\n  stopAnimate();\r\n  gameState = \"RUN\";\r\n  score = 0;\r\n  speed = 1000 / 10;\r\n  scoreEl.textContent = score;\r\n  foodPos = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"randomPos\"])();\r\n  snakePos = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"randomPos\"])();\r\n  snake = new _Snake__WEBPACK_IMPORTED_MODULE_1__[\"default\"](snakePos.x, snakePos.y, 10, [200, 200, 200]);\r\n  animate();\r\n};\r\n\r\ninit();\r\n\r\nfunction direction(e) {\r\n  if (e.key == \"ArrowLeft\" && snake.dirVal != \"RIGHT\") {\r\n    snake.dirVal = \"LEFT\";\r\n  } else if (e.key == \"ArrowUp\" && snake.dirVal != \"DOWN\") {\r\n    snake.dirVal = \"UP\";\r\n  } else if (e.key == \"ArrowRight\" && snake.dirVal != \"LEFT\") {\r\n    snake.dirVal = \"RIGHT\";\r\n  } else if (e.key == \"ArrowDown\" && snake.dirVal != \"UP\") {\r\n    snake.dirVal = \"DOWN\";\r\n  } else if ((e.key == \" \" || e.key.toLocaleLowerCase() == \"p\") && gameState == \"RUN\") {\r\n    // snake.dirVal = \"STOP\";\r\n    gameState = \"PAUSE\";\r\n  } else if ((e.key == \" \" || e.key.toLocaleLowerCase() == \"p\") && gameState == \"PAUSE\") {\r\n    animate();\r\n    gameState = \"RUN\";\r\n  } else if (e.key.toLocaleLowerCase() == \"s\" && gameState == \"STOP\") {\r\n    init();\r\n    snake.dirVal = \"STOP\";\r\n  }\r\n}\r\n\r\ndocument.addEventListener(\"keydown\", direction, false);\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });