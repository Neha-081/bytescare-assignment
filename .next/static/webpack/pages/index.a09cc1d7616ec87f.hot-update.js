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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Accordion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Accordion(param) {\n    let { data } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"w-full divide-y divide-primaryGray rounded\",\n            children: data.map((elem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n                    className: \"group py-4\",\n                    open: index == 0,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                            className: \"flex justify-end text-sm relative cursor-pointer list-none font-medium text-primary transition-colors duration-300 focus-visible:outline-none\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: elem.title\n                                }, void 0, false, {\n                                    fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Accordion/index.jsx\",\n                                    lineNumber: 11,\n                                    columnNumber: 11\n                                }, this),\n                                open ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.ChevronDownIcon, {\n                                    className: \"h-4 w-4 m-1\"\n                                }, void 0, false, {\n                                    fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Accordion/index.jsx\",\n                                    lineNumber: 12,\n                                    columnNumber: 19\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.ChevronUpIcon, {}, void 0, false, {\n                                    fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Accordion/index.jsx\",\n                                    lineNumber: 12,\n                                    columnNumber: 65\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Accordion/index.jsx\",\n                            lineNumber: 10,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-4 text-white text-xs\",\n                            children: elem.desc\n                        }, void 0, false, {\n                            fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Accordion/index.jsx\",\n                            lineNumber: 15,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Accordion/index.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Accordion/index.jsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Accordion;\nvar _c;\n$RefreshReg$(_c, \"Accordion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FjY29yZGlvbi9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1RTtBQUM5QztBQUVWLFNBQVNHLFVBQVUsS0FBTTtRQUFOLEVBQUNDLElBQUksRUFBQyxHQUFOO0lBQ2hDLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFRQyxXQUFVO3NCQUNoQkYsS0FBS0csR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNqQiw4REFBQ0M7b0JBQVFKLFdBQVU7b0JBQWFLLE1BQU1GLFNBQVM7O3NDQUMvQyw4REFBQ0c7NEJBQVFOLFdBQVU7OzhDQUNqQiw4REFBQ087OENBQUdMLEtBQUtNLEtBQUs7Ozs7OztnQ0FDYkgscUJBQU8sOERBQUNYLG1FQUFlQTtvQ0FBQ00sV0FBVTs7Ozs7eURBQW1CLDhEQUFDTCxpRUFBYUE7Ozs7Ozs7Ozs7O3NDQUd0RSw4REFBQ1k7NEJBQUVQLFdBQVU7c0NBQ1ZFLEtBQUtPLElBQUk7Ozs7Ozs7bUJBUDJDTjs7Ozs7Ozs7Ozs7QUFjL0Q7S0FuQndCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FjY29yZGlvbi9pbmRleC5qc3g/ZDJjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGV2cm9uRG93bkljb24sIENoZXZyb25VcEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3JkaW9uKHtkYXRhfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgZGl2aWRlLXkgZGl2aWRlLXByaW1hcnlHcmF5IHJvdW5kZWRcIj5cbiAgICAgICAge2RhdGEubWFwKChlbGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGV0YWlscyBjbGFzc05hbWU9XCJncm91cCBweS00XCIgb3Blbj17aW5kZXggPT0gMH0ga2V5PXtpbmRleH0+XG4gICAgICAgIDxzdW1tYXJ5IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgdGV4dC1zbSByZWxhdGl2ZSBjdXJzb3ItcG9pbnRlciBsaXN0LW5vbmUgZm9udC1tZWRpdW0gdGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgIDxwPntlbGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICB7b3BlbiA/IDxDaGV2cm9uRG93bkljb24gY2xhc3NOYW1lPVwiaC00IHctNCBtLTFcIiAvPiA6IDxDaGV2cm9uVXBJY29uIC8+fVxuICAgICAgICAgIFxuICAgICAgICA8L3N1bW1hcnk+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC13aGl0ZSB0ZXh0LXhzXCI+XG4gICAgICAgICAge2VsZW0uZGVzY31cbiAgICAgICAgPC9wPlxuICAgICAgPC9kZXRhaWxzPlxuICAgICAgICApKX1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkNoZXZyb25Eb3duSWNvbiIsIkNoZXZyb25VcEljb24iLCJSZWFjdCIsIkFjY29yZGlvbiIsImRhdGEiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibWFwIiwiZWxlbSIsImluZGV4IiwiZGV0YWlscyIsIm9wZW4iLCJzdW1tYXJ5IiwicCIsInRpdGxlIiwiZGVzYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Accordion/index.jsx\n"));

/***/ }),

/***/ "./components/Services/index.jsx":
/*!***************************************!*\
  !*** ./components/Services/index.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Services; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Accordion */ \"./components/Accordion/index.jsx\");\n\n\n\nfunction Services() {\n    const data = [\n        {\n            title: \"Pre-Piracy Solutions\",\n            desc: \"It is a prevention phase that comes into play before publishing the content. It helps creators to prevent their original content from piracy attacks and publish authorized, encrypted, and original content. Pre-Piracy solutions include watermarking and digital rights management, evaluating existing technologies for loopholes, implementing extra measures to stop leakages within the team, etc.\"\n        },\n        {\n            title: \"Post-Piracy Solutions\",\n            desc: \"It is a prevention phase that comes into play before publishing the content. It helps creators to prevent their original content from piracy attacks and publish authorized, encrypted, and original content. Pre-Piracy solutions include watermarking and digital rights management, evaluating existing technologies for loopholes, implementing extra measures to stop leakages within the team, etc.\"\n        },\n        {\n            title: \"Brand & Reputation Management\",\n            desc: \"It is a prevention phase that comes into play before publishing the content. It helps creators to prevent their original content from piracy attacks and publish authorized, encrypted, and original content. Pre-Piracy solutions include watermarking and digital rights management, evaluating existing technologies for loopholes, implementing extra measures to stop leakages within the team, etc.\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative w-full glide-04 mx-auto my-10\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-hidden\",\n                \"data-glide-el\": \"track\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-[#262833] flex flex-col md:flex-row-reverse\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"py-10 px-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-white text-3xl font-bold text-right\",\n                                        children: \"Products & Services\"\n                                    }, void 0, false, {\n                                        fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Services/index.jsx\",\n                                        lineNumber: 19,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"my-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Accordion__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            data: data\n                                        }, void 0, false, {\n                                            fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Services/index.jsx\",\n                                            lineNumber: 23,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Services/index.jsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Services/index.jsx\",\n                                lineNumber: 18,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/assets/privacy.svg\",\n                                alt: \"privacy\",\n                                className: \"w-100 h-100 max-w-full max-h-full m-auto py-10\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Services/index.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Services/index.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Services/index.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Services/index.jsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Applications/Sites/Projects/bytescare-assignment/components/Services/index.jsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Services;\nvar _c;\n$RefreshReg$(_c, \"Services\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlcnZpY2VzL2luZGV4LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBQ0o7QUFFdEIsU0FBU0c7SUFFcEIsTUFBTUMsT0FBTztRQUNUO1lBQUNDLE9BQU87WUFBd0JDLE1BQU07UUFBMlk7UUFDamI7WUFBQ0QsT0FBTztZQUF5QkMsTUFBTTtRQUEyWTtRQUNsYjtZQUFDRCxPQUFPO1lBQWlDQyxNQUFNO1FBQTJZO0tBQzdiO0lBRUgscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVO2dCQUFrQkMsaUJBQWM7MEJBQzdDLDRFQUFDRjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNFO3dDQUFHRixXQUFVO2tEQUEyQzs7Ozs7O2tEQUd6RCw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ1gsNEVBQUNOLGtEQUFTQTs0Q0FBQ0UsTUFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUd2Qiw4REFBQ087Z0NBQ0NDLEtBQUk7Z0NBQ0pDLEtBQUk7Z0NBQ0pMLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRMUI7S0FqQ3dCTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlcnZpY2VzL2luZGV4LmpzeD82ZmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4uL0FjY29yZGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlcygpIHtcblxuICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgIHt0aXRsZTogJ1ByZS1QaXJhY3kgU29sdXRpb25zJywgZGVzYzogJ0l0IGlzIGEgcHJldmVudGlvbiBwaGFzZSB0aGF0IGNvbWVzIGludG8gcGxheSBiZWZvcmUgcHVibGlzaGluZyB0aGUgY29udGVudC4gSXQgaGVscHMgY3JlYXRvcnMgdG8gcHJldmVudCB0aGVpciBvcmlnaW5hbCBjb250ZW50IGZyb20gcGlyYWN5IGF0dGFja3MgYW5kIHB1Ymxpc2ggYXV0aG9yaXplZCwgZW5jcnlwdGVkLCBhbmQgb3JpZ2luYWwgY29udGVudC4gUHJlLVBpcmFjeSBzb2x1dGlvbnMgaW5jbHVkZSB3YXRlcm1hcmtpbmcgYW5kIGRpZ2l0YWwgcmlnaHRzIG1hbmFnZW1lbnQsIGV2YWx1YXRpbmcgZXhpc3RpbmcgdGVjaG5vbG9naWVzIGZvciBsb29waG9sZXMsIGltcGxlbWVudGluZyBleHRyYSBtZWFzdXJlcyB0byBzdG9wIGxlYWthZ2VzIHdpdGhpbiB0aGUgdGVhbSwgZXRjLid9LFxuICAgICAgICB7dGl0bGU6ICdQb3N0LVBpcmFjeSBTb2x1dGlvbnMnLCBkZXNjOiAnSXQgaXMgYSBwcmV2ZW50aW9uIHBoYXNlIHRoYXQgY29tZXMgaW50byBwbGF5IGJlZm9yZSBwdWJsaXNoaW5nIHRoZSBjb250ZW50LiBJdCBoZWxwcyBjcmVhdG9ycyB0byBwcmV2ZW50IHRoZWlyIG9yaWdpbmFsIGNvbnRlbnQgZnJvbSBwaXJhY3kgYXR0YWNrcyBhbmQgcHVibGlzaCBhdXRob3JpemVkLCBlbmNyeXB0ZWQsIGFuZCBvcmlnaW5hbCBjb250ZW50LiBQcmUtUGlyYWN5IHNvbHV0aW9ucyBpbmNsdWRlIHdhdGVybWFya2luZyBhbmQgZGlnaXRhbCByaWdodHMgbWFuYWdlbWVudCwgZXZhbHVhdGluZyBleGlzdGluZyB0ZWNobm9sb2dpZXMgZm9yIGxvb3Bob2xlcywgaW1wbGVtZW50aW5nIGV4dHJhIG1lYXN1cmVzIHRvIHN0b3AgbGVha2FnZXMgd2l0aGluIHRoZSB0ZWFtLCBldGMuJ30sXG4gICAgICAgIHt0aXRsZTogJ0JyYW5kICYgUmVwdXRhdGlvbiBNYW5hZ2VtZW50JywgZGVzYzogJ0l0IGlzIGEgcHJldmVudGlvbiBwaGFzZSB0aGF0IGNvbWVzIGludG8gcGxheSBiZWZvcmUgcHVibGlzaGluZyB0aGUgY29udGVudC4gSXQgaGVscHMgY3JlYXRvcnMgdG8gcHJldmVudCB0aGVpciBvcmlnaW5hbCBjb250ZW50IGZyb20gcGlyYWN5IGF0dGFja3MgYW5kIHB1Ymxpc2ggYXV0aG9yaXplZCwgZW5jcnlwdGVkLCBhbmQgb3JpZ2luYWwgY29udGVudC4gUHJlLVBpcmFjeSBzb2x1dGlvbnMgaW5jbHVkZSB3YXRlcm1hcmtpbmcgYW5kIGRpZ2l0YWwgcmlnaHRzIG1hbmFnZW1lbnQsIGV2YWx1YXRpbmcgZXhpc3RpbmcgdGVjaG5vbG9naWVzIGZvciBsb29waG9sZXMsIGltcGxlbWVudGluZyBleHRyYSBtZWFzdXJlcyB0byBzdG9wIGxlYWthZ2VzIHdpdGhpbiB0aGUgdGVhbSwgZXRjLid9XG4gICAgXVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGdsaWRlLTA0IG14LWF1dG8gbXktMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIiBkYXRhLWdsaWRlLWVsPVwidHJhY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm8td3JhcCBmbGV4LW5vLXdyYXAgW2JhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbl0gW3RyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2RdIFt0b3VjaC1hY3Rpb246IHBhbi1ZXSBbd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybV0gcmVsYXRpdmUgZmxleCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHAtMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzI2MjgzM10gZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdy1yZXZlcnNlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTAgcHgtMTBcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIFByb2R1Y3RzICYgU2VydmljZXNcbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9wcml2YWN5LnN2Z1wiXG4gICAgICAgICAgICAgICAgYWx0PVwicHJpdmFjeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgaC0xMDAgbWF4LXctZnVsbCBtYXgtaC1mdWxsIG0tYXV0byBweS0xMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkFjY29yZGlvbiIsIlNlcnZpY2VzIiwiZGF0YSIsInRpdGxlIiwiZGVzYyIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEtZ2xpZGUtZWwiLCJoMiIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Services/index.jsx\n"));

/***/ })

});