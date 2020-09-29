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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Snake; });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\r\n\r\nclass Snake {\r\n  constructor(x, y, r, color) {\r\n    this.x = x;\r\n    this.y = y;\r\n    this.r = r;\r\n    this.color = color;\r\n    this.vel = {\r\n      x: this.r * 2,\r\n      y: this.r * 2\r\n    };\r\n\r\n    this.alpha = 1;\r\n    this.snake = [];\r\n    this.bodyLength = 0;\r\n  }\r\n\r\n  draw() {\r\n    for (let i = 0; i < this.snake.length; i++) {\r\n      let pos = this.snake[i];\r\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = `rgba(0,127,0, ${(0.75 / this.snake.length) * (i + 4)})`;\r\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].lineWidth = 1;\r\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].strokeStyle = `rgba(0,200,0, 1)`;\r\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].beginPath();\r\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].arc(pos.x + this.r, pos.y + this.r, this.r, 0, Math.PI * 2, false);\r\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].stroke();\r\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fill();\r\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].closePath();\r\n    }\r\n\r\n    _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = `rgba(0,255,0, ${this.alpha})`;\r\n    _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].beginPath();\r\n    _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].arc(this.x + this.r, this.y + this.r, this.r, 0, Math.PI * 2, false);\r\n    _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fill();\r\n    _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].closePath();\r\n  }\r\n\r\n  update(dir) {\r\n    this.draw();\r\n    this.move(dir);\r\n    this.createBody(dir);\r\n  }\r\n\r\n  move(dir) {\r\n    // this.snake.pop();\r\n    if (dir == \"LEFT\" && dir != \"RIGHT\") {\r\n      this.x -= this.vel.x;\r\n    } else if (dir == \"UP\" && dir != \"DOWN\") {\r\n      this.y -= this.vel.y;\r\n    } else if (dir == \"RIGHT\" && dir != \"LEFT\") {\r\n      this.x += this.vel.x;\r\n    } else if (dir == \"DOWN\" && dir != \"UP\") {\r\n      this.y += this.vel.y;\r\n    } else if (dir == \"STOP\") {\r\n      // Stopp\r\n    }\r\n  }\r\n\r\n  createBody(dir) {\r\n    if (dir != \"STOP\") {\r\n      if (this.snake.length > this.bodyLength) {\r\n        this.snake.splice(0, 1);\r\n      }\r\n      this.snake.push({ x: this.x, y: this.y });\r\n    }\r\n  }\r\n\r\n  addBody() {\r\n    this.bodyLength += 1;\r\n  }\r\n\r\n  tailCollision() {\r\n    for (let i = 0; i < this.snake.length; i++) {\r\n      if (this.x == this.snake[i].x && this.y == this.snake[i].y && i != this.snake.length - 1)\r\n        return true;\r\n    }\r\n    return false;\r\n  }\r\n\r\n  borderCollision() {\r\n    if (this.x < 0 || this.x > _helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width || this.y < 0 || this.y > _helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height) {\r\n      return true;\r\n    }\r\n    return false;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Snake.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! exports provided: log, canvas, c, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"log\", function() { return log; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\nconst canvas = document.querySelector(\"canvas\");\r\nconst c = canvas.getContext(\"2d\");\r\n\r\nconst random = (min, max) => Math.random() * (max - min) + min;\r\n\r\nconst log = (...val) => {\r\n  console.log(...val);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/helper.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Snake */ \"./src/Snake.js\");\n\r\n\r\n\r\n_helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width = 600;\r\n_helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height = 600;\r\n\r\nlet score = 0;\r\nlet dir = null;\r\nlet div = 20;\r\nlet countCol = 0;\r\nlet countRow = 0;\r\nlet foodPos;\r\n\r\nconst snake = new _Snake__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, 0, 10, [200, 200, 200]);\r\n\r\nconst randomFoodPos = () => {\r\n  let x = Math.floor(Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"random\"])(0, _helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width / div));\r\n  let y = Math.floor(Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"random\"])(0, _helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height / div));\r\n  return { x, y };\r\n};\r\n\r\nfoodPos = randomFoodPos();\r\n\r\nconst spawnFood = () => {\r\n  _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = \"rgb(200,20,20)\";\r\n  _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillRect(foodPos.x * div, foodPos.y * div, div, div);\r\n};\r\n\r\nconst gameOver = () => {\r\n  // Game Over\r\n  _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].save();\r\n  _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].font = \"normal bold 72px Consolas\";\r\n\r\n  let txt = \"Game Over\";\r\n  let tWidth = _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].measureText(txt).width / 2;\r\n\r\n  let gradient = _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].createLinearGradient(_helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width / 2 - tWidth, 0, _helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width / 2 + tWidth, 0);\r\n  gradient.addColorStop(\"0\", \"hsl(327, 100%, 60%)\");\r\n  gradient.addColorStop(\"0.5\", \"hsl(216, 100%, 50%)\");\r\n  gradient.addColorStop(\"1\", \"hsl(193, 100%, 60%)\");\r\n\r\n  _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].shadowColor = \"black\";\r\n  _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].shadowBlur = 15;\r\n\r\n  _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].strokeStyle = gradient;\r\n  _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].lineWidth = 2;\r\n  _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].strokeText(txt, _helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width / 2 - tWidth, _helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height / 2 + 20);\r\n  _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].restore();\r\n};\r\n\r\nconst bgGrid = () => {\r\n  _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = \"rgb(0,0,0)\";\r\n  _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillRect(0, 0, _helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width, _helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height);\r\n\r\n  for (let i = 0; i < _helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width; i++) {\r\n    for (let j = 0; j < _helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height; j++) {\r\n      if (countCol % 2 == 0 && countRow % 2 == 1) {\r\n        _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = \"rgb(20,20,20)\";\r\n        _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillRect(i * div, j * div, div, div);\r\n      } else if (countCol % 2 == 1 && countRow % 2 == 0) {\r\n        _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = \"rgb(20,20,20)\";\r\n        _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillRect(i * div, j * div, div, div);\r\n      }\r\n      countRow++;\r\n    }\r\n    countCol++;\r\n  }\r\n};\r\n\r\nconst game = setInterval(() => {\r\n  if (snake.tailCollision()) {\r\n    Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"log\"])(\"GAME OVER\");\r\n    gameOver();\r\n    clearInterval(game);\r\n  }\r\n  if (snake.borderCollision()) {\r\n    Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"log\"])(\"Game OVER\");\r\n    gameOver();\r\n    clearInterval(game);\r\n  }\r\n  bgGrid();\r\n  spawnFood();\r\n  snake.update(dir);\r\n\r\n  if (snake.x == foodPos.x * div && snake.y == foodPos.y * div) {\r\n    score++;\r\n    snake.addBody();\r\n    foodPos = randomFoodPos();\r\n  }\r\n}, 150);\r\n\r\nconst direction = e => {\r\n  if (e.key == \"ArrowLeft\" && dir != \"RIGHT\") {\r\n    dir = \"LEFT\";\r\n  } else if (e.key == \"ArrowUp\" && dir != \"DOWN\") {\r\n    dir = \"UP\";\r\n  } else if (e.key == \"ArrowRight\" && dir != \"LEFT\") {\r\n    dir = \"RIGHT\";\r\n  } else if (e.key == \"ArrowDown\" && dir != \"UP\") {\r\n    dir = \"DOWN\";\r\n  } else if (e.key == \" \") {\r\n    dir = \"STOP\";\r\n  }\r\n};\r\ndocument.addEventListener(\"keydown\", direction);\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });