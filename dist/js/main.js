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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Snake; });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\n\nclass Snake {\n  constructor(x, y, r, color) {\n    this.x = x;\n    this.y = y;\n    this.r = r;\n    this.color = color;\n    this.vel = {\n      x: this.r * 2,\n      y: this.r * 2\n    };\n\n    this.alpha = 1;\n    this.snake = [];\n    this.bodyLength = 0;\n  }\n\n  draw() {\n    for (let i = 0; i < this.snake.length; i++) {\n      let pos = this.snake[i];\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = `rgba(${this.color}, ${(this.alpha / this.snake.length) * (i + 2)})`;\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].beginPath();\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].arc(pos.x + this.r, pos.y + this.r, this.r, 0, Math.PI * 2, false);\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fill();\n      _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].closePath();\n    }\n\n    _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = `rgba(200,0,0, ${this.alpha})`;\n    _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].beginPath();\n    _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].arc(this.x + this.r, this.y + this.r, this.r, 0, Math.PI * 2, false);\n    _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fill();\n    _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].closePath();\n  }\n\n  update(dir) {\n    this.draw();\n    this.move(dir);\n    this.createBody(dir);\n  }\n\n  move(dir) {\n    // this.snake.pop();\n    if (dir == \"LEFT\" && dir != \"RIGHT\") {\n      this.x -= this.vel.x;\n    } else if (dir == \"UP\" && dir != \"DOWN\") {\n      this.y -= this.vel.y;\n    } else if (dir == \"RIGHT\" && dir != \"LEFT\") {\n      this.x += this.vel.x;\n    } else if (dir == \"DOWN\" && dir != \"UP\") {\n      this.y += this.vel.y;\n    } else if (dir == \"STOP\") {\n      // Stopp\n    }\n  }\n\n  createBody(dir) {\n    if (dir != \"STOP\") {\n      if (this.snake.length > this.bodyLength) {\n        this.snake.splice(0, 1);\n      }\n      this.snake.push({ x: this.x, y: this.y });\n    }\n  }\n\n  addBody() {\n    this.bodyLength += 1;\n  }\n\n  collisionBorder() {\n    if (this.x - this.r < 0 || this.x + this.r > _helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width) {\n      this.vel.x *= -1;\n    }\n    if (this.y - this.r < 0 || this.y + this.r > _helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height) {\n      this.vel.y *= -1;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Snake.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! exports provided: log, canvas, c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"log\", function() { return log; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return c; });\nconst canvas = document.querySelector(\"canvas\");\nconst c = canvas.getContext(\"2d\");\nconst log = (...val) => {\n  console.log(...val);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/helper.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Snake */ \"./src/Snake.js\");\n\n\n\n_helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width = 600;\n_helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height = 600;\n\nlet step = 10;\nlet dir = null;\nlet div = 20;\nlet countCol = 0;\nlet countRow = 0;\n\nconst snake = new _Snake__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, 0, 10, [200, 200, 200]);\n\nconst animate = () => {\n  _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = \"rgb(0,0,0)\";\n  _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillRect(0, 0, _helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width, _helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height);\n\n  for (let i = 0; i < _helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width; i++) {\n    for (let j = 0; j < _helper__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height; j++) {\n      if (countCol % 2 == 0 && countRow % 2 == 1) {\n        _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = \"rgb(20,20,20)\";\n        _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillRect(i * div, j * div, div, div);\n      } else if (countCol % 2 == 1 && countRow % 2 == 0) {\n        _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = \"rgb(20,20,20)\";\n        _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillRect(i * div, j * div, div, div);\n      }\n      countRow++;\n    }\n    countCol++;\n  }\n\n  _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = \"rgb(20,200,20)\";\n  _helper__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillRect(10 * div, 4 * div, div, div);\n\n  snake.update(dir);\n  if (snake.x == 10 * div && snake.y == 4 * div) {\n    snake.addBody();\n  }\n};\nsetInterval(animate, 200);\nanimate();\n\nconst direction = e => {\n  if (e.key == \"ArrowLeft\" && dir != \"RIGHT\") {\n    dir = \"LEFT\";\n  } else if (e.key == \"ArrowUp\" && dir != \"DOWN\") {\n    dir = \"UP\";\n  } else if (e.key == \"ArrowRight\" && dir != \"LEFT\") {\n    dir = \"RIGHT\";\n  } else if (e.key == \"ArrowDown\" && dir != \"UP\") {\n    dir = \"DOWN\";\n  } else if (e.key == \" \") {\n    dir = \"STOP\";\n  }\n};\ndocument.addEventListener(\"keydown\", direction);\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });