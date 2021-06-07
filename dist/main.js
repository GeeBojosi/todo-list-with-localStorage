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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_pageContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pageContent */ \"./src/modules/pageContent.js\");\n/* harmony import */ var _storage_todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage/todos */ \"./src/storage/todos.js\");\n\r\n\r\n\r\npageLoad();\r\n// Load DOM stuff\r\nfunction pageLoad() {\r\n  (0,_modules_pageContent__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n};\r\n// get the sidenav and main\r\nconst sideNav = document.querySelector(\".sidenav\");\r\nconst main = document.querySelector('#main');\r\n\r\nfunction open() {\r\n  sideNav.style.width = \"250px\";\r\n  main.style.marginLeft = \"250px\";\r\n}\r\n\r\nfunction close() {\r\n  sideNav.style.width = \"0\";\r\n  main.style.marginLeft = \"0\";\r\n}\r\n// clickable icons for opening and closing sidenav \r\ndocument.querySelector('span').addEventListener('click', open);\r\ndocument.querySelector('.closebtn').addEventListener('click', close);\r\n\r\n// Handle modal\r\n// Get the modal\r\nconst modal = document.querySelector(\".modal\");\r\n// Get the button that opens the modal\r\nconst btn = document.querySelector(\"#myBtn\");\r\n\r\nbtn.addEventListener('click', function () {\r\n  modal.style.display = \"block\";\r\n  // main.style.marginLeft = \"0\";\r\n});\r\n\r\n// When the user clicks anywhere outside of the modal, close it\r\nwindow.addEventListener('click', function (e) {\r\n  if (e.target == modal) {\r\n    modal.style.display = \"none\";\r\n  }\r\n});\r\n\r\n// Handle collapsible sidebar\r\nconst coll = document.getElementsByClassName(\"collapsible\");\r\n\r\nfor (let i = 0; i < coll.length; i++) {\r\n  coll[i].addEventListener('click', function (e) {\r\n    this.classList.toggle(\"active\");\r\n    let content = this.nextElementSibling;\r\n    if (content.style.display === \"block\") {\r\n      content.style.display = \"none\";\r\n    } else {\r\n      content.style.display = \"block\";\r\n    }\r\n  });\r\n};\r\n\r\ndocument.querySelector('#myModal').addEventListener('submit', e => {\r\n  e.preventDefault();\r\n  // Get form values\r\n  const title = document.querySelector('#title').value;\r\n  const priority = document.querySelector('#priority').value;\r\n\r\n  // instantiate a new todo\r\n  const todo = new _storage_todos__WEBPACK_IMPORTED_MODULE_1__.Todos(title, priority);\r\n  // add todo to list\r\n  _storage_todos__WEBPACK_IMPORTED_MODULE_1__.UI.addTodoToList(todo);\r\n  // add to localStorage\r\n  _storage_todos__WEBPACK_IMPORTED_MODULE_1__.Store.addTodos(todo);\r\n  modal.style.display = \"none\";\r\n  // clear fields\r\n  _storage_todos__WEBPACK_IMPORTED_MODULE_1__.UI.clearFields()\r\n});\r\n\r\ndocument.querySelector('#todo-list').addEventListener('click', e => {\r\n  _storage_todos__WEBPACK_IMPORTED_MODULE_1__.UI.removeTodo(e.target);\r\n})\r\n\r\n// console.log(UI.displayTodos())\r\ndocument.addEventListener('DOMContentLoaded', _storage_todos__WEBPACK_IMPORTED_MODULE_1__.UI.displayTodos())\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/pageContent.js":
/*!************************************!*\
  !*** ./src/modules/pageContent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHeader = () => {\r\n  const header = document.createElement('header');\r\n  header.innerHTML = `\r\n    <h1><i class=\"fas fa-check-double\"></i><a href=\"#\">TodoList</a></h1>\r\n    <button id=\"myBtn\">Add Todo</button>\r\n  `;\r\n  return header;\r\n}\r\n\r\nconst createSideBar = () => {\r\n  const sideBar = document.createElement('div');\r\n  sideBar.classList.add('sidenav');\r\n  sideBar.innerHTML = `\r\n    <a class=\"closebtn\">×</a>\r\n    <div style=\"color:#fff\" class=\"collapsible\">Today</div>\r\n    <div class=\"content\">\r\n      <li>This is just some random content.</li>\r\n      <li>This is just some random content.</li>\r\n      <li>This is just some random content.</li>\r\n      <li>This is just some random content.</li>\r\n    </div>\r\n    <hr/>\r\n    <div style=\"color:#fff\" class=\"collapsible\">Projects</div>\r\n    <div class=\"content\">\r\n    <li>This is just some random content.</li>\r\n    <li>This is just some random content.</li>\r\n    <li>This is just some random content.</li>\r\n    <li>This is just some random content.</li>\r\n  </div>\r\n  `;\r\n  return sideBar;\r\n}\r\n\r\nconst createMain = () => {\r\n  const main = document.createElement('main');\r\n  main.setAttribute('id', 'main');\r\n  main.innerHTML = `\r\n    <span><i class=\"fas fa-chevron-right\"></i></span>\r\n    <div class=\"modal\" id=\"modal\">\r\n      <form class=\"modal-content\" id=\"myModal\">\r\n        <div class=\"form-contents\">\r\n          <h1>Add a Todo</h1>\r\n          <hr/>\r\n          <input type=\"text\" id=\"title\" placeholder=\"Title\" name=\"title\" required>\r\n          <select id=\"priority\" required>\r\n            <option value=\"\" selected>Select Priority</option>\r\n            <option value=\"1\">priority 1</option>\r\n            <option value=\"2\">priority 2</option>\r\n            <option value=\"3\">priority 3</option>\r\n            <option value=\"4\">priority 4</option>\r\n          </select>\r\n          <div class=\"btns\">\r\n            <button onclick=\"document.getElementById('modal').style.display='none'\" type=\"button\">Cancel</button>\r\n            <button type=\"submit\">Add Todo</button>\r\n          </div>    \r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div id=\"todo-list\">\r\n     \r\n    </div>\r\n    `;\r\n  return main;\r\n}\r\n\r\nconst contents = () => {\r\n  const { body } = document;\r\n  const container = document.querySelector('#content');\r\n  body.insertBefore(createHeader(), body.firstChild);\r\n  container.appendChild(createSideBar());\r\n  container.appendChild(createMain());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contents);\n\n//# sourceURL=webpack://todo-list/./src/modules/pageContent.js?");

/***/ }),

/***/ "./src/storage/todos.js":
/*!******************************!*\
  !*** ./src/storage/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todos\": () => (/* binding */ Todos),\n/* harmony export */   \"UI\": () => (/* binding */ UI),\n/* harmony export */   \"Store\": () => (/* binding */ Store)\n/* harmony export */ });\nclass Todos {\r\n  constructor(title, priority) {\r\n    if (!title && !priority) {\r\n      throw new Error('No todo provided');\r\n    }\r\n    this.title = title;\r\n    this.priority = priority;\r\n  }\r\n}\r\n\r\nclass UI {\r\n  static displayTodos() {\r\n    const todos = Store.getTodos();\r\n    todos.forEach(todo => this.addTodoToList(todo));\r\n    return todos;\r\n  }\r\n\r\n  static addTodoToList(book) {\r\n    const list = document.querySelector('#todo-list');\r\n    list.classList.add('todo-list')\r\n    const todoDiv = document.createElement('div');\r\n    todoDiv.innerHTML = `\r\n      <div class=\"todo\">${book.title}<i class=\"fas fa-trash delete\"></i></div>\r\n    `;\r\n    list.appendChild(todoDiv);\r\n  };\r\n\r\n  static removeTodo(element) {\r\n    if (element.classList.contains('delete')) {\r\n      element.parentElement.parentElement.remove()\r\n    }\r\n  }\r\n\r\n  static clearFields() {\r\n    document.querySelector('#title').value = \"\";\r\n    document.querySelector('#priority').value = \"\";\r\n  }\r\n}\r\n\r\nclass Store {\r\n  static getTodos() {\r\n    let todos;\r\n    if (localStorage.getItem('todos') === null) {\r\n      todos = [];\r\n    } else {\r\n      todos = JSON.parse(localStorage.getItem('todos'));\r\n    }\r\n\r\n    return todos;\r\n  }\r\n\r\n  static addTodos(todo) {\r\n    const todos = Store.getTodos();\r\n\r\n    todos.push(todo);\r\n    localStorage.setItem('todos', JSON.stringify(todos));\r\n  }\r\n\r\n  static removeBook(priority) {\r\n    const todos = Store.getTodos();\r\n\r\n    todos.forEach((todo, index) => {\r\n      if (todo.priority === priority) {\r\n        todos.splice(index, 1);\r\n      }\r\n    });\r\n\r\n    localStorage.setItem('todos', JSON.stringify(todos));\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/storage/todos.js?");

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