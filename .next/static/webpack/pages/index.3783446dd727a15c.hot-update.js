"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/GridBox/index.jsx":
/*!**************************************!*\
  !*** ./components/GridBox/index.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GridBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction GridBox(param) {\n    let { gridArray } = param;\n    return(// <ul role=\"list\" className=\"grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2\">\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        role: \"list\",\n        className: \"grid grid-cols-2 gap-4\",\n        children: gridArray.map((person)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"col-span-1 max-w-[360px] h-[300px] flex flex-col text-center bg-white rounded-lg shadow-lg divide-y divide-gray-200\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 flex flex-col p-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"w-16 h-16 flex-shrink-0 mx-auto rounded-full\",\n                            src: person.imageUrl,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                            lineNumber: 11,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"mt-6 text-primaryBlack text-sm font-medium\",\n                            children: person.name\n                        }, void 0, false, {\n                            fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                            lineNumber: 12,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                            className: \"mt-1 flex-grow flex flex-col justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                    className: \"sr-only\",\n                                    children: \"Title\"\n                                }, void 0, false, {\n                                    fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                                    lineNumber: 14,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                    className: \"text-primaryGray text-xs my-2\",\n                                    children: person.title\n                                }, void 0, false, {\n                                    fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                                    lineNumber: 15,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                            lineNumber: 13,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 11\n                }, this)\n            }, person.email, false, {\n                fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, this));\n}\n_c = GridBox;\nvar _c;\n$RefreshReg$(_c, \"GridBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dyaWRCb3gvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZSxTQUFTQSxRQUFRLEtBQVc7UUFBWCxFQUFDQyxTQUFTLEVBQUMsR0FBWDtJQUM5QixPQUNFLG1HQUFtRztrQkFDbkcsOERBQUNDO1FBQUdDLE1BQUs7UUFBT0MsV0FBVTtrQkFDdkJILFVBQVVJLEdBQUcsQ0FBQyxDQUFDQyx1QkFDZCw4REFBQ0M7Z0JBRUNILFdBQVU7MEJBRVYsNEVBQUNJO29CQUFJSixXQUFVOztzQ0FDYiw4REFBQ0s7NEJBQUlMLFdBQVU7NEJBQStDTSxLQUFLSixPQUFPSyxRQUFROzRCQUFFQyxLQUFJOzs7Ozs7c0NBQ3hGLDhEQUFDQzs0QkFBR1QsV0FBVTtzQ0FBOENFLE9BQU9RLElBQUk7Ozs7OztzQ0FDdkUsOERBQUNDOzRCQUFHWCxXQUFVOzs4Q0FDWiw4REFBQ1k7b0NBQUdaLFdBQVU7OENBQVU7Ozs7Ozs4Q0FDeEIsOERBQUNhO29DQUFHYixXQUFVOzhDQUFpQ0UsT0FBT1ksS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBUjFEWixPQUFPYSxLQUFLOzs7Ozs7Ozs7O0FBZTNCO0tBckJ3Qm5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR3JpZEJveC9pbmRleC5qc3g/ZGNkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmlkQm94KHtncmlkQXJyYXl9KSB7XG4gIHJldHVybiAoXG4gICAgLy8gPHVsIHJvbGU9XCJsaXN0XCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNiBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtMlwiPlxuICAgIDx1bCByb2xlPVwibGlzdFwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgIHtncmlkQXJyYXkubWFwKChwZXJzb24pID0+IChcbiAgICAgICAgPGxpXG4gICAgICAgICAga2V5PXtwZXJzb24uZW1haWx9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBtYXgtdy1bMzYwcHhdIGgtWzMwMHB4XSBmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIHAtOFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgZmxleC1zaHJpbmstMCBteC1hdXRvIHJvdW5kZWQtZnVsbFwiIHNyYz17cGVyc29uLmltYWdlVXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm10LTYgdGV4dC1wcmltYXJ5QmxhY2sgdGV4dC1zbSBmb250LW1lZGl1bVwiPntwZXJzb24ubmFtZX08L2gzPlxuICAgICAgICAgICAgPGRsIGNsYXNzTmFtZT1cIm10LTEgZmxleC1ncm93IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJzci1vbmx5XCI+VGl0bGU8L2R0PlxuICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5R3JheSB0ZXh0LXhzIG15LTJcIj57cGVyc29uLnRpdGxlfTwvZGQ+XG4gICAgICAgICAgICA8L2RsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkdyaWRCb3giLCJncmlkQXJyYXkiLCJ1bCIsInJvbGUiLCJjbGFzc05hbWUiLCJtYXAiLCJwZXJzb24iLCJsaSIsImRpdiIsImltZyIsInNyYyIsImltYWdlVXJsIiwiYWx0IiwiaDMiLCJuYW1lIiwiZGwiLCJkdCIsImRkIiwidGl0bGUiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GridBox/index.jsx\n"));

/***/ })

});