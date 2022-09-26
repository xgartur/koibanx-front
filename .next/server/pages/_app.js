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

/***/ "./context/AppContext.ts":
/*!*******************************!*\
  !*** ./context/AppContext.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AppContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0FwcENvbnRleHQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLFVBQVUsR0FBR0QsMERBQW1CLENBQUMsRUFBRSxDQUFDO0FBRTFDLGlFQUFlQyxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2liYW54Ly4vY29udGV4dC9BcHBDb250ZXh0LnRzPzE5NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQXBwQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHBDb250ZXh0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/AppContext.ts\n");

/***/ }),

/***/ "./hooks/initialState.ts":
/*!*******************************!*\
  !*** ./hooks/initialState.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst initialState = {\n    stores: [],\n    order: {\n        commerce: 0,\n        cuit: 0\n    },\n    params: {\n        like: \"\",\n        active: \"not\"\n    },\n    page: 0,\n    pages: 0\n};\nconst API = \"https://koibanx-backtest.herokuapp.com/api/store\";\nconst useInitialState = ()=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        buildParams();\n    }, [\n        state.params,\n        state.page\n    ]);\n    const buildParams = ()=>{\n        const page = `page=${state.page}`;\n        const like = `like=${state.params.like}`;\n        const isActive = `active=${state.params.active}`;\n        const params = `?${page}&${state.params.like != \"\" ? like : \"\"}&${state.params.active == \"not\" ? \"\" : isActive}`;\n        setStore(params);\n    };\n    const cleanParams = ()=>{\n        setState({\n            ...state,\n            page: 0,\n            params: {\n                like: \"\",\n                active: \"not\"\n            }\n        });\n    };\n    const setOrderCommerce = (num)=>{\n        setState({\n            ...state,\n            order: {\n                cuit: state.order.cuit,\n                commerce: num\n            }\n        });\n    };\n    const setOrderCuit = (num)=>{\n        setState({\n            ...state,\n            order: {\n                ...state.order,\n                cuit: num\n            }\n        });\n    };\n    const setParams = (like, active)=>{\n        setState({\n            ...state,\n            params: {\n                like,\n                active\n            }\n        });\n    };\n    const setPage = (page)=>{\n        setState({\n            ...state,\n            page\n        });\n    };\n    const setStore = async (params)=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1___default()(`${API}${params}`, {\n            auth: {\n                username: \"admin\",\n                password: \"123\"\n            }\n        });\n        setState({\n            ...state,\n            stores: response.data.data,\n            page: response.data.page,\n            pages: response.data.pages\n        });\n    };\n    return {\n        state,\n        setOrderCuit,\n        setOrderCommerce,\n        setStore,\n        setParams,\n        cleanParams,\n        setPage\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInitialState);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1RLFFBQVEsR0FBRyxPQUFPWCxNQUFjLEdBQUs7UUFDekMsTUFBTWtCLFFBQVEsR0FBRyxNQUFNeEIsNENBQUssQ0FBQyxDQUFDLEVBQUVXLEdBQUcsQ0FBQyxFQUFFTCxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQzlDbUIsSUFBSSxFQUFFO2dCQUNKQyxRQUFRLEVBQUUsT0FBTztnQkFDakJDLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1NBQ0YsQ0FBQztRQUNGYixRQUFRLENBQUM7WUFDUCxHQUFHRCxLQUFLO1lBQ1JYLE1BQU0sRUFBRXNCLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDQSxJQUFJO1lBQzFCbkIsSUFBSSxFQUFFZSxRQUFRLENBQUNJLElBQUksQ0FBQ25CLElBQUk7WUFDeEJDLEtBQUssRUFBRWMsUUFBUSxDQUFDSSxJQUFJLENBQUNsQixLQUFLO1NBQzNCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPO1FBQ0xHLEtBQUs7UUFDTFEsWUFBWTtRQUNaRixnQkFBZ0I7UUFDaEJGLFFBQVE7UUFDUkssU0FBUztRQUNUSixXQUFXO1FBQ1hLLE9BQU87S0FDUixDQUFDO0FBQ0osQ0FBQztBQUVELGlFQUFlWCxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2liYW54Ly4vaG9va3MvaW5pdGlhbFN0YXRlLnRzP2QyMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc3RvcmVzOiBbXSxcbiAgb3JkZXI6IHtcbiAgICBjb21tZXJjZTogMCxcbiAgICBjdWl0OiAwXG4gIH0sXG4gIHBhcmFtczoge1xuICAgIGxpa2U6ICcnLFxuICAgIGFjdGl2ZTogJ25vdCdcbiAgfSxcbiAgcGFnZTogMCxcbiAgcGFnZXM6IDAsXG59O1xuXG5jb25zdCBBUEkgPSAnaHR0cHM6Ly9rb2liYW54LWJhY2t0ZXN0Lmhlcm9rdWFwcC5jb20vYXBpL3N0b3JlJ1xuY29uc3QgdXNlSW5pdGlhbFN0YXRlID0gKCkgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYnVpbGRQYXJhbXMoKVxuICB9LCBbc3RhdGUucGFyYW1zLCBzdGF0ZS5wYWdlXSk7XG5cbiAgY29uc3QgYnVpbGRQYXJhbXMgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZSA9IGBwYWdlPSR7c3RhdGUucGFnZX1gXG4gICAgY29uc3QgbGlrZSA9IGBsaWtlPSR7c3RhdGUucGFyYW1zLmxpa2V9YFxuICAgIGNvbnN0IGlzQWN0aXZlID0gYGFjdGl2ZT0ke3N0YXRlLnBhcmFtcy5hY3RpdmV9YFxuICAgIGNvbnN0IHBhcmFtcyA9IGA/JHtwYWdlfSYke3N0YXRlLnBhcmFtcy5saWtlICE9ICcnID8gbGlrZSA6ICcnfSYke3N0YXRlLnBhcmFtcy5hY3RpdmUgPT0gJ25vdCcgPyAnJyA6IGlzQWN0aXZlfWBcbiAgICBzZXRTdG9yZShwYXJhbXMpXG4gIH1cbiAgY29uc3QgY2xlYW5QYXJhbXMgPSAoKSA9PiB7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBwYWdlOiAwLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGxpa2U6ICcnLFxuICAgICAgICBhY3RpdmU6ICdub3QnXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIGNvbnN0IHNldE9yZGVyQ29tbWVyY2UgPSAobnVtOiBudW1iZXIpID0+IHtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIG9yZGVyOiB7IGN1aXQ6IHN0YXRlLm9yZGVyLmN1aXQsIGNvbW1lcmNlOiBudW0gfSxcbiAgICB9KTtcbiAgfVxuICBjb25zdCBzZXRPcmRlckN1aXQgPSAobnVtOiBudW1iZXIpID0+IHtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIG9yZGVyOiB7IC4uLnN0YXRlLm9yZGVyLCBjdWl0OiBudW0gfSxcbiAgICB9KTtcbiAgfVxuICBjb25zdCBzZXRQYXJhbXMgPSAobGlrZTogc3RyaW5nLCBhY3RpdmU6IHN0cmluZykgPT4ge1xuICAgIHNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGxpa2UsXG4gICAgICAgIGFjdGl2ZVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuICBjb25zdCBzZXRQYWdlID0gKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgIHNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgcGFnZVxuICAgIH0pO1xuICB9XG4gIGNvbnN0IHNldFN0b3JlID0gYXN5bmMgKHBhcmFtczogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhgJHtBUEl9JHtwYXJhbXN9YCwge1xuICAgICAgYXV0aDoge1xuICAgICAgICB1c2VybmFtZTogJ2FkbWluJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcxMjMnXG4gICAgICB9XG4gICAgfSk7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzdG9yZXM6IHJlc3BvbnNlLmRhdGEuZGF0YSxcbiAgICAgIHBhZ2U6IHJlc3BvbnNlLmRhdGEucGFnZSxcbiAgICAgIHBhZ2VzOiByZXNwb25zZS5kYXRhLnBhZ2VzXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXRlLFxuICAgIHNldE9yZGVyQ3VpdCxcbiAgICBzZXRPcmRlckNvbW1lcmNlLFxuICAgIHNldFN0b3JlLFxuICAgIHNldFBhcmFtcyxcbiAgICBjbGVhblBhcmFtcyxcbiAgICBzZXRQYWdlXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VJbml0aWFsU3RhdGU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImluaXRpYWxTdGF0ZSIsInN0b3JlcyIsIm9yZGVyIiwiY29tbWVyY2UiLCJjdWl0IiwicGFyYW1zIiwibGlrZSIsImFjdGl2ZSIsInBhZ2UiLCJwYWdlcyIsIkFQSSIsInVzZUluaXRpYWxTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJidWlsZFBhcmFtcyIsImlzQWN0aXZlIiwic2V0U3RvcmUiLCJjbGVhblBhcmFtcyIsInNldE9yZGVyQ29tbWVyY2UiLCJudW0iLCJzZXRPcmRlckN1aXQiLCJzZXRQYXJhbXMiLCJzZXRQYWdlIiwicmVzcG9uc2UiLCJhdXRoIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/initialState.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AppContext */ \"./context/AppContext.ts\");\n/* harmony import */ var _hooks_initialState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/initialState */ \"./hooks/initialState.ts\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const initialState = (0,_hooks_initialState__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Provider, {\n        value: initialState,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/arturo/git/koibanx/koibanx-front/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/arturo/git/koibanx/koibanx-front/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBK0M7QUFDSTtBQUNuQjtBQUVoQyxTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQU8sRUFBRTtJQUM1QyxNQUFNQyxZQUFZLEdBQUdKLCtEQUFlLEVBQUU7SUFDdEMscUJBQ0UsOERBQUNELG9FQUFtQjtRQUFDTyxLQUFLLEVBQUVGLFlBQVk7a0JBQ3RDLDRFQUFDRixTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ1IsQ0FDdEI7QUFDSixDQUFDO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tvaWJhbngvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvQXBwQ29udGV4dCc7XG5pbXBvcnQgdXNlSW5pdGlhbFN0YXRlIGZyb20gJy4uL2hvb2tzL2luaXRpYWxTdGF0ZSdcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuc2Nzcyc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogYW55KSB7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHVzZUluaXRpYWxTdGF0ZSgpO1xuICByZXR1cm4gKFxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtpbml0aWFsU3RhdGV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsInVzZUluaXRpYWxTdGF0ZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaW5pdGlhbFN0YXRlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();