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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GridBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction GridBox(param) {\n    let { gridArray } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        role: \"list\",\n        children: [\n            'className=\"grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  place-items-center md:mx-10\"',\n            gridArray.map((person)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"col-span-1 lg:h-[300px] lg:w-[300px] flex flex-col text-center bg-white rounded-lg shadow-lg divide-y divide-gray-200\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 flex flex-col p-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-16 h-16 flex-shrink-0 mx-auto rounded-full\",\n                                src: person.imageUrl,\n                                alt: \"grid-img\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                                lineNumber: 13,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"mt-6 text-primaryBlack text-sm font-medium\",\n                                children: person.name\n                            }, void 0, false, {\n                                fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                className: \"mt-1 flex-grow flex flex-col justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                        className: \"sr-only\",\n                                        children: \"Title\"\n                                    }, void 0, false, {\n                                        fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                        className: \"text-primaryGray text-xs my-2\",\n                                        children: person.title\n                                    }, void 0, false, {\n                                        fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this)\n                }, person.email, false, {\n                    fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/GridBox/index.jsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n_c = GridBox;\nvar _c;\n$RefreshReg$(_c, \"GridBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dyaWRCb3gvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZSxTQUFTQSxRQUFRLEtBQWE7UUFBYixFQUFFQyxTQUFTLEVBQUUsR0FBYjtJQUM5QixxQkFDRSw4REFBQ0M7UUFDQ0MsTUFBSzs7WUFDSjtZQUVBRixVQUFVRyxHQUFHLENBQUMsQ0FBQ0MsdUJBQ2QsOERBQUNDO29CQUVDQyxXQUFVOzhCQUVWLDRFQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUNDRixXQUFVO2dDQUNWRyxLQUFLTCxPQUFPTSxRQUFRO2dDQUNwQkMsS0FBSTs7Ozs7OzBDQUVOLDhEQUFDQztnQ0FBR04sV0FBVTswQ0FDWEYsT0FBT1MsSUFBSTs7Ozs7OzBDQUVkLDhEQUFDQztnQ0FBR1IsV0FBVTs7a0RBQ1osOERBQUNTO3dDQUFHVCxXQUFVO2tEQUFVOzs7Ozs7a0RBQ3hCLDhEQUFDVTt3Q0FBR1YsV0FBVTtrREFBaUNGLE9BQU9hLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkFkMURiLE9BQU9jLEtBQUs7Ozs7Ozs7Ozs7O0FBcUIzQjtLQTdCd0JuQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dyaWRCb3gvaW5kZXguanN4P2RjZGEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JpZEJveCh7IGdyaWRBcnJheSB9KSB7XG4gIHJldHVybiAoXG4gICAgPHVsXG4gICAgICByb2xlPVwibGlzdFwiXG4gICAgICA+XG4gICAgICBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC02IHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy0zICBwbGFjZS1pdGVtcy1jZW50ZXIgbWQ6bXgtMTBcIlxuICAgICAge2dyaWRBcnJheS5tYXAoKHBlcnNvbikgPT4gKFxuICAgICAgICA8bGlcbiAgICAgICAgICBrZXk9e3BlcnNvbi5lbWFpbH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGxnOmgtWzMwMHB4XSBsZzp3LVszMDBweF0gZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlciBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZyBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBmbGV4LWNvbCBwLThcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBoLTE2IGZsZXgtc2hyaW5rLTAgbXgtYXV0byByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICBzcmM9e3BlcnNvbi5pbWFnZVVybH1cbiAgICAgICAgICAgICAgYWx0PVwiZ3JpZC1pbWdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC02IHRleHQtcHJpbWFyeUJsYWNrIHRleHQtc20gZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAge3BlcnNvbi5uYW1lfVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxkbCBjbGFzc05hbWU9XCJtdC0xIGZsZXgtZ3JvdyBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwic3Itb25seVwiPlRpdGxlPC9kdD5cbiAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeUdyYXkgdGV4dC14cyBteS0yXCI+e3BlcnNvbi50aXRsZX08L2RkPlxuICAgICAgICAgICAgPC9kbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiR3JpZEJveCIsImdyaWRBcnJheSIsInVsIiwicm9sZSIsIm1hcCIsInBlcnNvbiIsImxpIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW1nIiwic3JjIiwiaW1hZ2VVcmwiLCJhbHQiLCJoMyIsIm5hbWUiLCJkbCIsImR0IiwiZGQiLCJ0aXRsZSIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GridBox/index.jsx\n"));

/***/ })

});