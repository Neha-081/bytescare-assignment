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

/***/ "./components/Accordion/index.jsx":
/*!****************************************!*\
  !*** ./components/Accordion/index.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Accordion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Accordion(param) {\n    let { data } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"w-full divide-y divide-primaryGray rounded\",\n            children: data.map((elem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n                    className: \"group py-4\",\n                    open: index == 0,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                            className: \"flex justify-end text-sm relative cursor-pointer list-none font-medium text-primary transition-colors duration-300 focus-visible:outline-none\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: elem.title\n                                }, void 0, false, {\n                                    fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Accordion/index.jsx\",\n                                    lineNumber: 11,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.ChevronDownIcon, {\n                                    className: \"h-4 w-4 m-1\"\n                                }, void 0, false, {\n                                    fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Accordion/index.jsx\",\n                                    lineNumber: 12,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Accordion/index.jsx\",\n                            lineNumber: 10,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-4 text-white text-xs\",\n                            children: elem.desc\n                        }, void 0, false, {\n                            fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Accordion/index.jsx\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Accordion/index.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Accordion/index.jsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Accordion;\nvar _c;\n$RefreshReg$(_c, \"Accordion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FjY29yZGlvbi9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3RDtBQUMvQjtBQUVWLFNBQVNFLFVBQVUsS0FBTTtRQUFOLEVBQUNDLElBQUksRUFBQyxHQUFOO0lBQ2hDLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFRQyxXQUFVO3NCQUNoQkYsS0FBS0csR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNqQiw4REFBQ0M7b0JBQVFKLFdBQVU7b0JBQWFLLE1BQU1GLFNBQVM7O3NDQUMvQyw4REFBQ0c7NEJBQVFOLFdBQVU7OzhDQUNqQiw4REFBQ087OENBQUdMLEtBQUtNLEtBQUs7Ozs7Ozs4Q0FDZCw4REFBQ2IsbUVBQWVBO29DQUFDSyxXQUFVOzs7Ozs7Ozs7Ozs7c0NBRTdCLDhEQUFDTzs0QkFBRVAsV0FBVTtzQ0FDVkUsS0FBS08sSUFBSTs7Ozs7OzttQkFOMkNOOzs7Ozs7Ozs7OztBQWEvRDtLQWxCd0JOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWNjb3JkaW9uL2luZGV4LmpzeD9kMmM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoZXZyb25Eb3duSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvcmRpb24oe2RhdGF9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBkaXZpZGUteSBkaXZpZGUtcHJpbWFyeUdyYXkgcm91bmRlZFwiPlxuICAgICAgICB7ZGF0YS5tYXAoKGVsZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxkZXRhaWxzIGNsYXNzTmFtZT1cImdyb3VwIHB5LTRcIiBvcGVuPXtpbmRleCA9PSAwfSBrZXk9e2luZGV4fT5cbiAgICAgICAgPHN1bW1hcnkgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCB0ZXh0LXNtIHJlbGF0aXZlIGN1cnNvci1wb2ludGVyIGxpc3Qtbm9uZSBmb250LW1lZGl1bSB0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGZvY3VzLXZpc2libGU6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgPHA+e2VsZW0udGl0bGV9PC9wPlxuICAgICAgICAgIDxDaGV2cm9uRG93bkljb24gY2xhc3NOYW1lPVwiaC00IHctNCBtLTFcIiAvPlxuICAgICAgICA8L3N1bW1hcnk+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC13aGl0ZSB0ZXh0LXhzXCI+XG4gICAgICAgICAge2VsZW0uZGVzY31cbiAgICAgICAgPC9wPlxuICAgICAgPC9kZXRhaWxzPlxuICAgICAgICApKX1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkNoZXZyb25Eb3duSWNvbiIsIlJlYWN0IiwiQWNjb3JkaW9uIiwiZGF0YSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJtYXAiLCJlbGVtIiwiaW5kZXgiLCJkZXRhaWxzIiwib3BlbiIsInN1bW1hcnkiLCJwIiwidGl0bGUiLCJkZXNjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Accordion/index.jsx\n"));

/***/ })

});