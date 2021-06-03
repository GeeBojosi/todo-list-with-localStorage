/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_pageContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pageContent */ \"./src/modules/pageContent.js\");\n\r\n\r\npageLoad();\r\n\r\nfunction pageLoad() {\r\n  (0,_modules_pageContent__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n};\r\n\r\nfunction open() {\r\n  document.querySelector(\".sidenav\").style.width = \"250px\";\r\n  document.querySelector(\"#main\").style.marginLeft = \"250px\";\r\n}\r\n\r\nfunction close() {\r\n  document.querySelector(\".sidenav\").style.width = \"0\";\r\n  document.querySelector(\"#main\").style.marginLeft = \"0\";\r\n}\r\n\r\ndocument.querySelector('span').addEventListener('click', open);\r\n\r\ndocument.querySelector('.closebtn').addEventListener('click', close);\r\n\r\n// Handle modal\r\n\r\n// Get the modal\r\nconst modal = document.querySelector(\".modal\");\r\n// Get the button that opens the modal\r\nconst btn = document.querySelector(\"#myBtn\");\r\n\r\nbtn.addEventListener('click', function () {\r\n  modal.style.display = \"block\";\r\n  document.querySelector(\".sidenav\").style.width = \"0\";\r\n  document.querySelector(\"#main\").style.marginLeft = \"0\";\r\n});\r\n\r\n// When the user clicks anywhere outside of the modal, close it\r\nwindow.addEventListener('click', function (e) {\r\n  if (e.target == modal) {\r\n    modal.style.display = \"none\";\r\n  }\r\n})\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/pageContent.js":
/*!************************************!*\
  !*** ./src/modules/pageContent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHeader = () => {\r\n  const header = document.createElement('header');\r\n  header.innerHTML = `\r\n    <h1><i class=\"fas fa-check-double\"></i><a href=\"#\">TodoList</a></h1>\r\n    <button id=\"myBtn\">Add Todo</button>\r\n  `;\r\n  return header;\r\n}\r\n\r\nconst createSideBar = () => {\r\n  const sideBar = document.createElement('div');\r\n  sideBar.classList.add('sidenav');\r\n  sideBar.innerHTML = `\r\n    <a class=\"closebtn\">×</a>\r\n    <a href=\"#\">Your Todos</a>\r\n    <a href=\"#\">Projects</a>\r\n  `;\r\n  return sideBar;\r\n}\r\n\r\nconst createMain = () => {\r\n  const main = document.createElement('main');\r\n  main.setAttribute('id', 'main');\r\n  main.innerHTML = `\r\n    <span><i class=\"fas fa-chevron-right\"></i></span>\r\n    <div class=\"modal\" id=\"modal\">\r\n      <form class=\"modal-content\" id=\"myModal\">\r\n        <div class=\"form-contents\">\r\n          <h1>Add a Todo</h1>\r\n          <p>fill in the todo details</p>\r\n          <hr/>\r\n          <label for=\"title\"><b>Title</b></label>\r\n          <input type=\"text\" placeholder=\"Enter title\" name=\"title\" required>\r\n          <label for=\"desc\"><b>Description</b></label>\r\n          <textarea name=\"desc\" id=\"description\" cols=\"86\" rows=\"10\"></textarea>\r\n          <div class=\"btns\">\r\n            <button onclick=\"document.getElementById('modal').style.display='none'\" type=\"button\">Cancel</button>\r\n            <button type=\"submit\">Add Todo</button>\r\n          </div>    \r\n        </div>\r\n      </form>\r\n    </div>\r\n    <p>\r\n      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero iusto est, quasi rerum rem nesciunt architecto\r\n      dolor unde eveniet, sint eligendi animi numquam ducimus illum sunt provident doloremque molestias fugit.\r\n      Rem assumenda autem excepturi eos voluptatibus laboriosam reprehenderit recusandae quia! Officia voluptatem velit\r\n      voluptatum ratione! Culpa modi molestias, vero natus reiciendis harum ipsam aliquam obcaecati dicta quas,\r\n      consectetur ipsum impedit.\r\n      Voluptatem quasi quae nesciunt amet cumque minima laudantium, culpa tenetur fugit? Fugiat consequatur, odio eveniet\r\n      at inventore animi omnis, tenetur corrupti cum quibusdam quas unde error expedita deserunt debitis illo?\r\n  </p>\r\n    `;\r\n  return main;\r\n}\r\n\r\nconst contents = () => {\r\n  const { body } = document;\r\n  const container = document.querySelector('#content');\r\n  body.insertBefore(createHeader(), body.firstChild);\r\n  container.appendChild(createSideBar());\r\n  container.appendChild(createMain());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contents);\n\n//# sourceURL=webpack://todo-list/./src/modules/pageContent.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;