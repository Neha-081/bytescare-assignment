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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Navbar */ \"./components/Navbar/index.jsx\");\n/* harmony import */ var _components_Topbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Topbar */ \"./components/Topbar/index.jsx\");\n/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Slider */ \"./components/Slider/index.jsx\");\n/* harmony import */ var _components_GridBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/GridBox */ \"./components/GridBox/index.jsx\");\n/* harmony import */ var _components_GridBox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_GridBox__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _industries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./industries */ \"./pages/industries.jsx\");\n\n\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"tracking-wider md:px-28\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Applications/Sites/Projects/bytescare-assignment/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Topbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Applications/Sites/Projects/bytescare-assignment/pages/index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Applications/Sites/Projects/bytescare-assignment/pages/index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_industries__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Applications/Sites/Projects/bytescare-assignment/pages/index.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/Sites/Projects/bytescare-assignment/pages/index.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFFVTtBQUNBO0FBQ0E7QUFDRTtBQUNMO0FBR3RCLFNBQVNNO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVOzswQkFDZCw4REFBQ1AsMERBQU1BOzs7OzswQkFDUCw4REFBQ0MsMERBQU1BOzs7OzswQkFDUCw4REFBQ0MsMERBQU1BOzs7OzswQkFDUCw4REFBQ0UsbURBQVVBOzs7Ozs7Ozs7OztBQUdqQjtLQVR3QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBOYXZiYXIgZnJvbSAnQC9jb21wb25lbnRzL05hdmJhcidcbmltcG9ydCBUb3BiYXIgZnJvbSAnQC9jb21wb25lbnRzL1RvcGJhcidcbmltcG9ydCBTbGlkZXIgZnJvbSAnQC9jb21wb25lbnRzL1NsaWRlcidcbmltcG9ydCBHcmlkQm94IGZyb20gJ0AvY29tcG9uZW50cy9HcmlkQm94J1xuaW1wb3J0IEluZHVzdHJpZXMgZnJvbSAnLi9pbmR1c3RyaWVzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPSd0cmFja2luZy13aWRlciBtZDpweC0yOCc+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8VG9wYmFyIC8+XG4gICAgICA8U2xpZGVyIC8+XG4gICAgICA8SW5kdXN0cmllcyAvPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTmF2YmFyIiwiVG9wYmFyIiwiU2xpZGVyIiwiR3JpZEJveCIsIkluZHVzdHJpZXMiLCJIb21lIiwibWFpbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ }),

/***/ "./pages/industries.jsx":
/*!******************************!*\
  !*** ./pages/industries.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_GridBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/GridBox */ \"./components/GridBox/index.jsx\");\n/* harmony import */ var _components_GridBox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_GridBox__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst gridArray = [\n    {\n        name: \"Fast & Economical\",\n        title: \"Our automated crawlers and deep learning solutions are quicker and cheaper.\",\n        imageUrl: \"/assets/economical.svg\"\n    },\n    {\n        name: \"Robust & Accurate\",\n        title: \"Verify infringements to ensure they are not from your official channel partners.  \",\n        imageUrl: \"/assets/robust.svg\"\n    },\n    {\n        name: \"Scalable\",\n        title: \"Regardless of the type, length or number of your content, our technology is designed to handle it.\",\n        imageUrl: \"/assets/scalable.svg\"\n    },\n    {\n        name: \"Transparent\",\n        title: \"Our automated crawlers and deep learning solutions are quicker and cheaper.\",\n        imageUrl: \"/assets/transparent.svg\"\n    },\n    {\n        name: \"Enforcement & Investigation\",\n        title: \"Our automated crawlers and deep learning solutions are quicker and cheaper.\",\n        imageUrl: \"/assets/enforcement.svg\"\n    }\n];\nconst Industries = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center my-10 md:mx-[200px] mx-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-primaryGray\",\n                children: \"Why BYTESCARE?\"\n            }, void 0, false, {\n                fileName: \"/Applications/Sites/Projects/bytescare-assignment/pages/industries.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-3xl text-primaryBlack my-3\",\n                children: [\n                    \"The right choice to increase your\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-primary\",\n                        children: \"contents security.\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/Sites/Projects/bytescare-assignment/pages/industries.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/Sites/Projects/bytescare-assignment/pages/industries.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-primaryGray text-sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"my-5\",\n                        children: \"Bytescare provides a variety of fast, economical, robust, accurate, scalable, and transparent AI/ML empowered solutions that assist our customers in protecting their content from any copyright infringement and also from any pre/post piracy damages. Our smart solutions differentiate us from the other competitors in the Market.\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/Sites/Projects/bytescare-assignment/pages/industries.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"my-5\",\n                        children: \"We anticipate our customers to easily protect their content and brands from any damage and thefts with our user-friendly, reliable, and 24*7 available products and services including Pre-Piracy Solutions, Post-Piracy Solutions, and Brand & Reputation Management tools.\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/Sites/Projects/bytescare-assignment/pages/industries.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/Sites/Projects/bytescare-assignment/pages/industries.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-10\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_GridBox__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        gridArray: gridArray\n                    }, void 0, false, {\n                        fileName: \"/Applications/Sites/Projects/bytescare-assignment/pages/industries.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/Sites/Projects/bytescare-assignment/pages/industries.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/Sites/Projects/bytescare-assignment/pages/industries.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Industries;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Industries);\nvar _c;\n$RefreshReg$(_c, \"Industries\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmR1c3RyaWVzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNqQjtBQUMxQixNQUFNRSxZQUFZO0lBQ2hCO1FBQ0VDLE1BQU07UUFDTkMsT0FDRTtRQUNGQyxVQUFVO0lBQ1o7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQ0U7UUFDRkMsVUFBVTtJQUNaO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFVBQVU7SUFDWjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxVQUFVO0lBQ1o7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsVUFBVTtJQUNaO0NBQ0Q7QUFFRCxNQUFNQyxhQUFhO0lBQ2pCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUVELFdBQVU7MEJBQW1COzs7Ozs7MEJBQ2hDLDhEQUFDRTtnQkFBR0YsV0FBVTs7b0JBQTRDO29CQUN0QjtrQ0FDbEMsOERBQUNHO3dCQUFLSCxXQUFVO2tDQUFlOzs7Ozs7Ozs7Ozs7MEJBRWpDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFFRCxXQUFVO2tDQUFPOzs7Ozs7a0NBT3BCLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBTzs7Ozs7Ozs7Ozs7OzBCQU90Qiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUNaO2tDQUNELDhEQUFDUiw0REFBT0E7d0JBQUNFLFdBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUI7S0E3Qk1JO0FBK0JOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZHVzdHJpZXMuanN4PzJkY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdyaWRCb3ggZnJvbSBcIkAvY29tcG9uZW50cy9HcmlkQm94XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5jb25zdCBncmlkQXJyYXkgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkZhc3QgJiBFY29ub21pY2FsXCIsXG4gICAgdGl0bGU6XG4gICAgICBcIk91ciBhdXRvbWF0ZWQgY3Jhd2xlcnMgYW5kIGRlZXAgbGVhcm5pbmcgc29sdXRpb25zIGFyZSBxdWlja2VyIGFuZCBjaGVhcGVyLlwiLFxuICAgIGltYWdlVXJsOiBcIi9hc3NldHMvZWNvbm9taWNhbC5zdmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUm9idXN0ICYgQWNjdXJhdGVcIixcbiAgICB0aXRsZTpcbiAgICAgIFwiVmVyaWZ5IGluZnJpbmdlbWVudHMgdG8gZW5zdXJlIHRoZXkgYXJlIG5vdCBmcm9tIHlvdXIgb2ZmaWNpYWwgY2hhbm5lbCBwYXJ0bmVycy4gIFwiLFxuICAgIGltYWdlVXJsOiBcIi9hc3NldHMvcm9idXN0LnN2Z1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTY2FsYWJsZVwiLFxuICAgIHRpdGxlOiBcIlJlZ2FyZGxlc3Mgb2YgdGhlIHR5cGUsIGxlbmd0aCBvciBudW1iZXIgb2YgeW91ciBjb250ZW50LCBvdXIgdGVjaG5vbG9neSBpcyBkZXNpZ25lZCB0byBoYW5kbGUgaXQuXCIsXG4gICAgaW1hZ2VVcmw6IFwiL2Fzc2V0cy9zY2FsYWJsZS5zdmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVHJhbnNwYXJlbnRcIixcbiAgICB0aXRsZTogXCJPdXIgYXV0b21hdGVkIGNyYXdsZXJzIGFuZCBkZWVwIGxlYXJuaW5nIHNvbHV0aW9ucyBhcmUgcXVpY2tlciBhbmQgY2hlYXBlci5cIixcbiAgICBpbWFnZVVybDogXCIvYXNzZXRzL3RyYW5zcGFyZW50LnN2Z1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJFbmZvcmNlbWVudCAmIEludmVzdGlnYXRpb25cIixcbiAgICB0aXRsZTogXCJPdXIgYXV0b21hdGVkIGNyYXdsZXJzIGFuZCBkZWVwIGxlYXJuaW5nIHNvbHV0aW9ucyBhcmUgcXVpY2tlciBhbmQgY2hlYXBlci5cIixcbiAgICBpbWFnZVVybDogXCIvYXNzZXRzL2VuZm9yY2VtZW50LnN2Z1wiLFxuICB9LFxuXTtcblxuY29uc3QgSW5kdXN0cmllcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LTEwIG1kOm14LVsyMDBweF0gbXgtNVwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5R3JheVwiPldoeSBCWVRFU0NBUkU/PC9wPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bCB0ZXh0LXByaW1hcnlCbGFjayBteS0zXCI+XG4gICAgICAgIFRoZSByaWdodCBjaG9pY2UgdG8gaW5jcmVhc2UgeW91cntcIiBcIn1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+Y29udGVudHMgc2VjdXJpdHkuPC9zcGFuPlxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5R3JheSB0ZXh0LXNtXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTVcIj5cbiAgICAgICAgICBCeXRlc2NhcmUgcHJvdmlkZXMgYSB2YXJpZXR5IG9mIGZhc3QsIGVjb25vbWljYWwsIHJvYnVzdCwgYWNjdXJhdGUsXG4gICAgICAgICAgc2NhbGFibGUsIGFuZCB0cmFuc3BhcmVudCBBSS9NTCBlbXBvd2VyZWQgc29sdXRpb25zIHRoYXQgYXNzaXN0IG91clxuICAgICAgICAgIGN1c3RvbWVycyBpbiBwcm90ZWN0aW5nIHRoZWlyIGNvbnRlbnQgZnJvbSBhbnkgY29weXJpZ2h0IGluZnJpbmdlbWVudFxuICAgICAgICAgIGFuZCBhbHNvIGZyb20gYW55IHByZS9wb3N0IHBpcmFjeSBkYW1hZ2VzLiBPdXIgc21hcnQgc29sdXRpb25zXG4gICAgICAgICAgZGlmZmVyZW50aWF0ZSB1cyBmcm9tIHRoZSBvdGhlciBjb21wZXRpdG9ycyBpbiB0aGUgTWFya2V0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTVcIj5cbiAgICAgICAgICBXZSBhbnRpY2lwYXRlIG91ciBjdXN0b21lcnMgdG8gZWFzaWx5IHByb3RlY3QgdGhlaXIgY29udGVudCBhbmQgYnJhbmRzXG4gICAgICAgICAgZnJvbSBhbnkgZGFtYWdlIGFuZCB0aGVmdHMgd2l0aCBvdXIgdXNlci1mcmllbmRseSwgcmVsaWFibGUsIGFuZCAyNCo3XG4gICAgICAgICAgYXZhaWxhYmxlIHByb2R1Y3RzIGFuZCBzZXJ2aWNlcyBpbmNsdWRpbmcgUHJlLVBpcmFjeSBTb2x1dGlvbnMsXG4gICAgICAgICAgUG9zdC1QaXJhY3kgU29sdXRpb25zLCBhbmQgQnJhbmQgJiBSZXB1dGF0aW9uIE1hbmFnZW1lbnQgdG9vbHMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xMFwiPlxuICAgICAgICB7XCIgXCJ9XG4gICAgICAgIDxHcmlkQm94IGdyaWRBcnJheT17Z3JpZEFycmF5fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmR1c3RyaWVzO1xuIl0sIm5hbWVzIjpbIkdyaWRCb3giLCJSZWFjdCIsImdyaWRBcnJheSIsIm5hbWUiLCJ0aXRsZSIsImltYWdlVXJsIiwiSW5kdXN0cmllcyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJoMSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/industries.jsx\n"));

/***/ })

});