"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.js\");\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\curso\\\\Documents\\\\portfolio\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\curso\\\\Documents\\\\portfolio\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBb0M7QUFFckIsU0FBU0MsR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDcEQscUJBQ0U7a0JBQ0UsNEVBQUNILHFEQUFLO3NCQUNKLDRFQUFDRSxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7OztnQkFDdEI7cUJBQ1AsQ0FDSDtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRoZW1lPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9UaGVtZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuICJdLCJuYW1lcyI6WyJUaGVtZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.js":
/*!*******************************!*\
  !*** ./src/styles/globals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-normalize */ \"styled-normalize\");\n/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\r\n  ${styled_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize};\r\n\r\n  * {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  html {\r\n    font-size: 62.5%;\r\n    scroll-behavior: smooth;\r\n\r\n  }\r\n  body {\r\n    font-family: ${(props)=>props.theme.fonts.main};\r\n    font-size: 1.6rem;\r\n    background: ${(props)=>props.theme.colors.background1};\r\n    color: ${(props)=>props.theme.colors.primary1};\r\n    cursor: default;\r\n\r\n  }\r\n  h1,h2,h3,h4,h5,h6,button {\r\n    font-family: ${(props)=>props.theme.fonts.title};\r\n  }\r\n  a {\r\n    text-decoration: none;\r\n  }\r\n  li{\r\n    list-style: none;\r\n  }\r\n\r\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyles);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0Q7QUFDVDtBQUU3QyxNQUFNRSxZQUFZLEdBQUdGLGdFQUFpQixDQUFDO0FBaUN2Qyw2REFBZUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmpzP2Q0NTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gJ3N0eWxlZC1ub3JtYWxpemUnO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgJHtub3JtYWxpemV9O1xyXG5cclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuXHJcbiAgfVxyXG4gIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udHMubWFpbn07XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmQxfTtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5MX07XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gIH1cclxuICBoMSxoMixoMyxoNCxoNSxoNixidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udHMudGl0bGV9O1xyXG4gIH1cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgbGl7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuXHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZXM7Il0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwibm9ybWFsaXplIiwiR2xvYmFsU3R5bGVzIiwicHJvcHMiLCJ0aGVtZSIsImZvbnRzIiwibWFpbiIsImNvbG9ycyIsImJhY2tncm91bmQxIiwicHJpbWFyeTEiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/globals.js\n");

/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _themes_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../themes/default */ \"./src/themes/default.js\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals */ \"./src/styles/globals.js\");\n\n\n\n\nconst Theme = ({ children  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        theme: _themes_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_globals__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\curso\\\\Documents\\\\portfolio\\\\src\\\\styles\\\\theme.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, undefined),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\curso\\\\Documents\\\\portfolio\\\\src\\\\styles\\\\theme.js\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUVaO0FBQ0Q7QUFFckMsTUFBTUcsS0FBSyxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLGlCQUN6Qiw4REFBQ0osNERBQWE7UUFBQ0MsS0FBSyxFQUFFQSx1REFBSzs7MEJBQ3pCLDhEQUFDQyxnREFBWTs7Ozt5QkFBRztZQUNmRSxRQUFROzs7Ozs7aUJBQ0s7QUFHbEIsaUVBQWVELEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvc3R5bGVzL3RoZW1lLmpzPzE5ZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vdGhlbWVzL2RlZmF1bHRcIjtcclxuaW1wb3J0IEdsb2JhbFN0eWxlcyBmcm9tICcuL2dsb2JhbHMnO1xyXG5cclxuY29uc3QgVGhlbWUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgIDxHbG9iYWxTdHlsZXMgLz5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L1RoZW1lUHJvdmlkZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZTsiXSwibmFtZXMiOlsiVGhlbWVQcm92aWRlciIsInRoZW1lIiwiR2xvYmFsU3R5bGVzIiwiVGhlbWUiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/theme.js\n");

/***/ }),

/***/ "./src/themes/default.js":
/*!*******************************!*\
  !*** ./src/themes/default.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    // Temp fonts\n    fonts: {\n        title: \"Space Grotesk, sans-serif\",\n        main: \"Space Grotesk, sans-serif\"\n    },\n    // Colors for layout\n    colors: {\n        primary1: \"hsl(204,23.8%,95.9%)\",\n        background1: \"#0F1624\",\n        accent1: \"hsl(34.9,98.6%,72.9%)\",\n        button: \"hsl(205.1,100%,36.1%)\",\n        background2: \"hsl(232.7,27.3%,23.7%)\"\n    },\n    // Breakpoints for responsive design\n    breakpoints: {\n        sm: \"screen and (max-width: 640px)\",\n        md: \"screen and (max-width: 768px)\",\n        lg: \"screen and (max-width: 1024px)\",\n        xl: \"screen and (max-width: 1280px)\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWVzL2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlO0lBQ2IsYUFBYTtJQUNiQSxLQUFLLEVBQUU7UUFDTEMsS0FBSyxFQUFFLDJCQUEyQjtRQUNsQ0MsSUFBSSxFQUFFLDJCQUEyQjtLQUNsQztJQUNELG9CQUFvQjtJQUNwQkMsTUFBTSxFQUFFO1FBQ05DLFFBQVEsRUFBRSxzQkFBc0I7UUFDaENDLFdBQVcsRUFBRSxTQUFTO1FBQ3RCQyxPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDQyxNQUFNLEVBQUUsdUJBQXVCO1FBQy9CQyxXQUFXLEVBQUUsd0JBQXdCO0tBQ3RDO0lBQ0Qsb0NBQW9DO0lBQ3BDQyxXQUFXLEVBQUU7UUFDWEMsRUFBRSxFQUFFLCtCQUErQjtRQUNuQ0MsRUFBRSxFQUFFLCtCQUErQjtRQUNuQ0MsRUFBRSxFQUFFLGdDQUFnQztRQUNwQ0MsRUFBRSxFQUFFLGdDQUFnQztLQUNyQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy90aGVtZXMvZGVmYXVsdC5qcz9iMWUyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyBUZW1wIGZvbnRzXHJcbiAgZm9udHM6IHtcclxuICAgIHRpdGxlOiBcIlNwYWNlIEdyb3Rlc2ssIHNhbnMtc2VyaWZcIixcclxuICAgIG1haW46IFwiU3BhY2UgR3JvdGVzaywgc2Fucy1zZXJpZlwiXHJcbiAgfSxcclxuICAvLyBDb2xvcnMgZm9yIGxheW91dFxyXG4gIGNvbG9yczoge1xyXG4gICAgcHJpbWFyeTE6IFwiaHNsKDIwNCwyMy44JSw5NS45JSlcIixcclxuICAgIGJhY2tncm91bmQxOiBcIiMwRjE2MjRcIixcclxuICAgIGFjY2VudDE6IFwiaHNsKDM0LjksOTguNiUsNzIuOSUpXCIsXHJcbiAgICBidXR0b246IFwiaHNsKDIwNS4xLDEwMCUsMzYuMSUpXCIsXHJcbiAgICBiYWNrZ3JvdW5kMjogXCJoc2woMjMyLjcsMjcuMyUsMjMuNyUpXCIsXHJcbiAgfSxcclxuICAvLyBCcmVha3BvaW50cyBmb3IgcmVzcG9uc2l2ZSBkZXNpZ25cclxuICBicmVha3BvaW50czoge1xyXG4gICAgc206ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KScsXHJcbiAgICBtZDogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpJyxcclxuICAgIGxnOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpJyxcclxuICAgIHhsOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpJ1xyXG4gIH0sXHJcbn1cclxuIl0sIm5hbWVzIjpbImZvbnRzIiwidGl0bGUiLCJtYWluIiwiY29sb3JzIiwicHJpbWFyeTEiLCJiYWNrZ3JvdW5kMSIsImFjY2VudDEiLCJidXR0b24iLCJiYWNrZ3JvdW5kMiIsImJyZWFrcG9pbnRzIiwic20iLCJtZCIsImxnIiwieGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/themes/default.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-normalize":
/*!***********************************!*\
  !*** external "styled-normalize" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-normalize");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();