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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Login({ providers  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center bg-black min-h-screen w-full justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-52 mb-10\",\n                src: \"https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-transparent-spotify-logo-images-25.png\",\n                alt: \"Spotify Logo\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\spotify-clone\\\\pages\\\\login.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-[#18d860] text-white py-3 px-5 rounded-full font-semibold\",\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(provider.id, {\n                                callbackUrl: \"/\"\n                            })\n                        ,\n                        children: [\n                            \"Login with \",\n                            provider.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\spotify-clone\\\\pages\\\\login.js\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this)\n                }, provider.name, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\spotify-clone\\\\pages\\\\login.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\spotify-clone\\\\pages\\\\login.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\nasync function getServerSideProps(context) {\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getProviders)();\n    return {\n        props: {\n            providers\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQzZCO0FBRXRELFNBQVNHLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUM1QixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsd0VBQXdFOzswQkFFckYsOERBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyxZQUFZO2dCQUFDRSxHQUFHLEVBQUMsMkdBQTJHO2dCQUFDQyxHQUFHLEVBQUMsY0FBYzs7Ozs7b0JBQUc7WUFFaEtDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDUCxTQUFTLENBQUMsQ0FBQ1EsR0FBRyxDQUFDLENBQUNDLFFBQVEsaUJBRXJDLDhEQUFDUixLQUFHOzhCQUNGLDRFQUFDUyxRQUFNO3dCQUFDUixTQUFTLEVBQUMsOERBQThEO3dCQUFDUyxPQUFPLEVBQUcsSUFBTWIsdURBQU0sQ0FBQ1csUUFBUSxDQUFDRyxFQUFFLEVBQUU7Z0NBQUNDLFdBQVcsRUFBRSxHQUFHOzZCQUFDLENBQUM7d0JBQUE7OzRCQUFHLGFBQzlIOzRCQUFDSixRQUFRLENBQUNLLElBQUk7Ozs7Ozs0QkFDbEI7bUJBSERMLFFBQVEsQ0FBQ0ssSUFBSTs7Ozt3QkFJakI7WUFDUCxDQUFDOzs7Ozs7WUFFRSxDQUNQO0NBQ0Y7QUFFRCxpRUFBZWYsS0FBSztBQUViLGVBQWVnQixrQkFBa0IsQ0FBQ0MsT0FBTyxFQUFFO0lBRWhELE1BQU1oQixTQUFTLEdBQUcsTUFBTUgsNkRBQVksRUFBRTtJQUV0QyxPQUFPO1FBQ0xvQixLQUFLLEVBQUU7WUFDTGpCLFNBQVM7U0FDVjtLQUNGO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5LWNsb25lLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGdldFByb3ZpZGVycywgc2lnbkluIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gTG9naW4oeyBwcm92aWRlcnMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctYmxhY2sgbWluLWgtc2NyZWVuIHctZnVsbCBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgIFxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT0ndy01MiBtYi0xMCcgc3JjPVwiaHR0cHM6Ly93d3cuZnJlZXBuZ2xvZ29zLmNvbS91cGxvYWRzL3Nwb3RpZnktbG9nby1wbmcvc3BvdGlmeS1sb2dvLXRyYW5zcGFyZW50LXNwb3RpZnktbG9nby1pbWFnZXMtMjUucG5nXCIgYWx0PVwiU3BvdGlmeSBMb2dvXCIgLz5cclxuXHJcbiAgICAgIHtPYmplY3QudmFsdWVzKHByb3ZpZGVycykubWFwKChwcm92aWRlcikgPT4gKFxyXG5cclxuICAgICAgICA8ZGl2IGtleT17cHJvdmlkZXIubmFtZX0+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctWyMxOGQ4NjBdIHRleHQtd2hpdGUgcHktMyBweC01IHJvdW5kZWQtZnVsbCBmb250LXNlbWlib2xkJyBvbkNsaWNrPXsgKCkgPT4gc2lnbkluKHByb3ZpZGVyLmlkLCB7Y2FsbGJhY2tVcmw6IFwiL1wifSkgfT5cclxuICAgICAgICAgICAgTG9naW4gd2l0aCB7cHJvdmlkZXIubmFtZX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHJcbiAgY29uc3QgcHJvdmlkZXJzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHByb3ZpZGVycyxcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZ2V0UHJvdmlkZXJzIiwic2lnbkluIiwiTG9naW4iLCJwcm92aWRlcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm92aWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCIsImNhbGxiYWNrVXJsIiwibmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();