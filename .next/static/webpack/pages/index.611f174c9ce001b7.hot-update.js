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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GridBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction GridBox(param) {\n    let { gridArray } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        role: \"list\",\n        className: \"grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:grid-cols-reverse place-items-center md:mx-10\",\n        children: gridArray.map((person)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"col-span-1 lg:h-[300px] lg:w-[300px] flex flex-col text-center bg-white rounded-lg shadow-lg divide-y divide-gray-200\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 flex flex-col p-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"w-16 h-16 flex-shrink-0 mx-auto rounded-full\",\n                            src: person.imageUrl,\n                            alt: \"grid-img\"\n                        }, void 0, false, {\n                            fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                            lineNumber: 13,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"mt-6 text-primaryBlack text-sm font-medium\",\n                            children: person.name\n                        }, void 0, false, {\n                            fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                            className: \"mt-1 flex-grow flex flex-col justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                    className: \"sr-only\",\n                                    children: \"Title\"\n                                }, void 0, false, {\n                                    fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                    className: \"text-primaryGray text-xs my-2\",\n                                    children: person.title\n                                }, void 0, false, {\n                                    fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 11\n                }, this)\n            }, person.email, false, {\n                fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n_c = GridBox;\nvar _c;\n$RefreshReg$(_c, \"GridBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dyaWRCb3gvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZSxTQUFTQSxRQUFRLEtBQWE7UUFBYixFQUFFQyxTQUFTLEVBQUUsR0FBYjtJQUM5QixxQkFDRSw4REFBQ0M7UUFDQ0MsTUFBSztRQUNMQyxXQUFVO2tCQUVUSCxVQUFVSSxHQUFHLENBQUMsQ0FBQ0MsdUJBQ2QsOERBQUNDO2dCQUVDSCxXQUFVOzBCQUVWLDRFQUFDSTtvQkFBSUosV0FBVTs7c0NBQ2IsOERBQUNLOzRCQUNDTCxXQUFVOzRCQUNWTSxLQUFLSixPQUFPSyxRQUFROzRCQUNwQkMsS0FBSTs7Ozs7O3NDQUVOLDhEQUFDQzs0QkFBR1QsV0FBVTtzQ0FDWEUsT0FBT1EsSUFBSTs7Ozs7O3NDQUVkLDhEQUFDQzs0QkFBR1gsV0FBVTs7OENBQ1osOERBQUNZO29DQUFHWixXQUFVOzhDQUFVOzs7Ozs7OENBQ3hCLDhEQUFDYTtvQ0FBR2IsV0FBVTs4Q0FBaUNFLE9BQU9ZLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQWQxRFosT0FBT2EsS0FBSzs7Ozs7Ozs7OztBQXFCM0I7S0E3QndCbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkQm94L2luZGV4LmpzeD9kY2RhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyaWRCb3goeyBncmlkQXJyYXkgfSkge1xuICByZXR1cm4gKFxuICAgIDx1bFxuICAgICAgcm9sZT1cImxpc3RcIlxuICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNiBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtcmV2ZXJzZSBwbGFjZS1pdGVtcy1jZW50ZXIgbWQ6bXgtMTBcIlxuICAgID5cbiAgICAgIHtncmlkQXJyYXkubWFwKChwZXJzb24pID0+IChcbiAgICAgICAgPGxpXG4gICAgICAgICAga2V5PXtwZXJzb24uZW1haWx9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBsZzpoLVszMDBweF0gbGc6dy1bMzAwcHhdIGZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbGcgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wgcC04XCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTYgaC0xNiBmbGV4LXNocmluay0wIG14LWF1dG8gcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgc3JjPXtwZXJzb24uaW1hZ2VVcmx9XG4gICAgICAgICAgICAgIGFsdD1cImdyaWQtaW1nXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LXByaW1hcnlCbGFjayB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIHtwZXJzb24ubmFtZX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8ZGwgY2xhc3NOYW1lPVwibXQtMSBmbGV4LWdyb3cgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cInNyLW9ubHlcIj5UaXRsZTwvZHQ+XG4gICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlHcmF5IHRleHQteHMgbXktMlwiPntwZXJzb24udGl0bGV9PC9kZD5cbiAgICAgICAgICAgIDwvZGw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkdyaWRCb3giLCJncmlkQXJyYXkiLCJ1bCIsInJvbGUiLCJjbGFzc05hbWUiLCJtYXAiLCJwZXJzb24iLCJsaSIsImRpdiIsImltZyIsInNyYyIsImltYWdlVXJsIiwiYWx0IiwiaDMiLCJuYW1lIiwiZGwiLCJkdCIsImRkIiwidGl0bGUiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GridBox/index.jsx\n"));

/***/ })

});