(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~main"],{

/***/ "./src/a.js":
/*!******************!*\
  !*** ./src/a.js ***!
  \******************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Nic'
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./a */ "./src/a.js");
// 同步模块引入



console.log(_a__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
console.log(jquery__WEBPACK_IMPORTED_MODULE_1___default()(body));
var div = document.createElement('div');
div.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['a', 'v', 'c']);
document.body.appendChild(div); //异步模块引入
// function getComponent () {
//       return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _}) => {
//             //异步加载lodash
//             var div = document.createElement('div');
//             div.innerHTML = _.join(['a','v','c']);
//             // document.body.appendChild(div);  
//             return div;          
//       })
//   }
// getComponent().then((ele) => {
//       document.body.appendChild(ele);
// });

/***/ })

}]);
//# sourceMappingURL=common.js.map