webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header/mobile-drawer.js":
/*!************************************************!*\
  !*** ./src/components/header/mobile-drawer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars */ \"./node_modules/react-custom-scrollbars/lib/index.js\");\n/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/drawer */ \"./src/components/drawer.js\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.data */ \"./src/components/header/header.data.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ \"./src/components/header/styles.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/macbook/Desktop/Others/nextjs-single-page/src/components/header/mobile-drawer.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar MobileDrawer = function MobileDrawer() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isDrawerOpen = _useState[0],\n      setDrawerOpen = _useState[1];\n\n  var DrawerHandler = function DrawerHandler() {\n    return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      sx: _styles__WEBPACK_IMPORTED_MODULE_8__[\"mobileDrawerStyles\"].handler,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }\n    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__[\"IoMdMenu\"], {\n      size: \"26px\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }\n    }));\n  };\n\n  return __jsx(components_drawer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    width: \"320px\",\n    drawerHandler: __jsx(DrawerHandler, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 22\n      }\n    }),\n    open: isDrawerOpen,\n    toggleHandler: function toggleHandler() {\n      return setDrawerOpen(!isDrawerOpen);\n    },\n    closeButton: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__[\"IoMdClose\"], {\n      size: \"24px\",\n      color: \"#000000\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 20\n      }\n    }),\n    drawerStyle: _styles__WEBPACK_IMPORTED_MODULE_8__[\"mobileDrawerStyles\"].drawer,\n    closeBtnStyle: _styles__WEBPACK_IMPORTED_MODULE_8__[\"mobileDrawerStyles\"].close,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  });\n};\n\n_s(MobileDrawer, \"biCi7iax1wEt4V0O89fHtaKT+Ws=\");\n\n_c = MobileDrawer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileDrawer);\n\nvar _c;\n\n$RefreshReg$(_c, \"MobileDrawer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZS1kcmF3ZXIuanM/NmExNyJdLCJuYW1lcyI6WyJNb2JpbGVEcmF3ZXIiLCJ1c2VTdGF0ZSIsImlzRHJhd2VyT3BlbiIsInNldERyYXdlck9wZW4iLCJEcmF3ZXJIYW5kbGVyIiwibW9iaWxlRHJhd2VyU3R5bGVzIiwiaGFuZGxlciIsImRyYXdlciIsImNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN6QixrQkFBc0NDLHNEQUFRLENBQUMsS0FBRCxDQUE5QztBQUFBLE1BQU9DLFlBQVA7QUFBQSxNQUFxQkMsYUFBckI7O0FBRUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLFdBQ0UsTUFBQyw0Q0FBRDtBQUFLLFFBQUUsRUFBRUMsMERBQWtCLENBQUNDLE9BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHVEQUFEO0FBQVUsVUFBSSxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREY7QUFLRCxHQU5EOztBQVFBLFNBQ0UsTUFBQyx5REFBRDtBQUNFLFNBQUssRUFBQyxPQURSO0FBRUUsaUJBQWEsRUFBRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZqQjtBQUdFLFFBQUksRUFBRUosWUFIUjtBQUlFLGlCQUFhLEVBQUU7QUFBQSxhQUFNQyxhQUFhLENBQUMsQ0FBQ0QsWUFBRixDQUFuQjtBQUFBLEtBSmpCO0FBS0UsZUFBVyxFQUFFLE1BQUMsd0RBQUQ7QUFBVyxVQUFJLEVBQUMsTUFBaEI7QUFBdUIsV0FBSyxFQUFDLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMZjtBQU1FLGVBQVcsRUFBRUcsMERBQWtCLENBQUNFLE1BTmxDO0FBT0UsaUJBQWEsRUFBRUYsMERBQWtCLENBQUNHLEtBUHBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQVdELENBdEJEOztHQUFNUixZOztLQUFBQSxZO0FBd0JTQSwyRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2hlYWRlci9tb2JpbGUtZHJhd2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCB7IFNjcm9sbGJhcnMgfSBmcm9tIFwicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnNcIjtcbmltcG9ydCBEcmF3ZXIgZnJvbSBcImNvbXBvbmVudHMvZHJhd2VyXCI7XG5pbXBvcnQgeyBJb01kQ2xvc2UsIElvTWRNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuaW1wb3J0IHtcbiAgRmFGYWNlYm9va0YsXG4gIEZhVHdpdHRlcixcbiAgRmFHaXRodWJBbHQsXG4gIEZhRHJpYmJibGUsXG59IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgbGlua3NEYXRhIH0gZnJvbSBcIi4vaGVhZGVyLmRhdGFcIjtcbmltcG9ydCB7IG1vYmlsZURyYXdlclN0eWxlcyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBNb2JpbGVEcmF3ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0RyYXdlck9wZW4sIHNldERyYXdlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IERyYXdlckhhbmRsZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgPEJveCBzeD17bW9iaWxlRHJhd2VyU3R5bGVzLmhhbmRsZXJ9PlxuICAgICAgICA8SW9NZE1lbnUgc2l6ZT1cIjI2cHhcIi8+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJcbiAgICAgIHdpZHRoPVwiMzIwcHhcIlxuICAgICAgZHJhd2VySGFuZGxlcj17PERyYXdlckhhbmRsZXIgLz59XG4gICAgICBvcGVuPXtpc0RyYXdlck9wZW59XG4gICAgICB0b2dnbGVIYW5kbGVyPXsoKSA9PiBzZXREcmF3ZXJPcGVuKCFpc0RyYXdlck9wZW4pfVxuICAgICAgY2xvc2VCdXR0b249ezxJb01kQ2xvc2Ugc2l6ZT1cIjI0cHhcIiBjb2xvcj1cIiMwMDAwMDBcIi8+fVxuICAgICAgZHJhd2VyU3R5bGU9e21vYmlsZURyYXdlclN0eWxlcy5kcmF3ZXJ9XG4gICAgICBjbG9zZUJ0blN0eWxlPXttb2JpbGVEcmF3ZXJTdHlsZXMuY2xvc2V9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZURyYXdlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header/mobile-drawer.js\n");

/***/ })

})