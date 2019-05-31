/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// devtool 关系到 错误映射关系 和 构建速度\r\n\r\n/*\r\n  当js 加载错误时， 通过 配置 sourcemap来定位错误信息 显示源代码 错误位置\r\n  \r\n  加了 inline 之后，  报错会精确到哪一行 哪一列 将映射关系图直接打包到 输出文件中 \r\n   \r\n  none \r\n  source-map   // 打包速度变慢  多出 js.map（映射关系图）\r\n  inline-source-map // DataUrl的方式 添加到 main.js 底部\r\n  cheap-inline-source-map // 不会精确到列\r\n\r\n\r\n  inline // 会将生成的 js.map 打包到 目标js文件里\r\n  cheap // 加了 cheap 打包速度会变快 只提示 行错误  不提示列\r\n  module // 提示第三方 模块的错误\r\n  eval  //eval 方式打包 打包速度最快  业务代码和 source-map以eval方式执行，提高打包速度\r\n    \r\n\r\n \r\n\r\n  最佳实践\r\n   cheap-module-eval-source-map\r\n   线上代码\r\n   cheap-module-source-map \r\n*/\r\nconsole.log('source Map')\r\n// window.onerror = function (msg, url, lineNo, columnNo, error) {\r\n//   var string = msg.toLowerCase()\r\n//   var substring = 'script error' // 这块下面会讲到\r\n//   if (string.indexOf(substring) == -1) {\r\n//     var message = [\r\n//       'Message: ' + msg,\r\n//       'URL: ' + url,\r\n//       'Line: ' + lineNo,\r\n//       'Column: ' + columnNo,\r\n//       'Error object: ' + JSON.stringify(error)\r\n//     ].join(' - ')\r\n//     console.log(message)\r\n//   }\r\n//   return false\r\n// }\r\nwindow.onerror = function (message, url, line, column, error) {\r\n  console.log('log---onerror::::',message, url, line, column, error);\r\n}\r\nthrow new Error('this is the error happened in b.js');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGRldnRvb2wg5YWz57O75YiwIOmUmeivr+aYoOWwhOWFs+ezuyDlkowg5p6E5bu66YCf5bqmXHJcblxyXG4vKlxyXG4gIOW9k2pzIOWKoOi9vemUmeivr+aXtu+8jCDpgJrov4cg6YWN572uIHNvdXJjZW1hcOadpeWumuS9jemUmeivr+S/oeaBryDmmL7npLrmupDku6PnoIEg6ZSZ6K+v5L2N572uXHJcbiAgXHJcbiAg5Yqg5LqGIGlubGluZSDkuYvlkI7vvIwgIOaKpemUmeS8mueyvuehruWIsOWTquS4gOihjCDlk6rkuIDliJcg5bCG5pig5bCE5YWz57O75Zu+55u05o6l5omT5YyF5YiwIOi+k+WHuuaWh+S7tuS4rSBcclxuICAgXHJcbiAgbm9uZSBcclxuICBzb3VyY2UtbWFwICAgLy8g5omT5YyF6YCf5bqm5Y+Y5oWiICDlpJrlh7oganMubWFw77yI5pig5bCE5YWz57O75Zu+77yJXHJcbiAgaW5saW5lLXNvdXJjZS1tYXAgLy8gRGF0YVVybOeahOaWueW8jyDmt7vliqDliLAgbWFpbi5qcyDlupXpg6hcclxuICBjaGVhcC1pbmxpbmUtc291cmNlLW1hcCAvLyDkuI3kvJrnsr7noa7liLDliJdcclxuXHJcblxyXG4gIGlubGluZSAvLyDkvJrlsIbnlJ/miJDnmoQganMubWFwIOaJk+WMheWIsCDnm67moIdqc+aWh+S7tumHjFxyXG4gIGNoZWFwIC8vIOWKoOS6hiBjaGVhcCDmiZPljIXpgJ/luqbkvJrlj5jlv6sg5Y+q5o+Q56S6IOihjOmUmeivryAg5LiN5o+Q56S65YiXXHJcbiAgbW9kdWxlIC8vIOaPkOekuuesrOS4ieaWuSDmqKHlnZfnmoTplJnor69cclxuICBldmFsICAvL2V2YWwg5pa55byP5omT5YyFIOaJk+WMhemAn+W6puacgOW/qyAg5Lia5Yqh5Luj56CB5ZKMIHNvdXJjZS1tYXDku6VldmFs5pa55byP5omn6KGM77yM5o+Q6auY5omT5YyF6YCf5bqmXHJcbiAgICBcclxuXHJcbiBcclxuXHJcbiAg5pyA5L2z5a6e6Le1XHJcbiAgIGNoZWFwLW1vZHVsZS1ldmFsLXNvdXJjZS1tYXBcclxuICAg57q/5LiK5Luj56CBXHJcbiAgIGNoZWFwLW1vZHVsZS1zb3VyY2UtbWFwIFxyXG4qL1xyXG5jb25zb2xlLmxvZygnc291cmNlIE1hcCcpXHJcbi8vIHdpbmRvdy5vbmVycm9yID0gZnVuY3Rpb24gKG1zZywgdXJsLCBsaW5lTm8sIGNvbHVtbk5vLCBlcnJvcikge1xyXG4vLyAgIHZhciBzdHJpbmcgPSBtc2cudG9Mb3dlckNhc2UoKVxyXG4vLyAgIHZhciBzdWJzdHJpbmcgPSAnc2NyaXB0IGVycm9yJyAvLyDov5nlnZfkuIvpnaLkvJrorrLliLBcclxuLy8gICBpZiAoc3RyaW5nLmluZGV4T2Yoc3Vic3RyaW5nKSA9PSAtMSkge1xyXG4vLyAgICAgdmFyIG1lc3NhZ2UgPSBbXHJcbi8vICAgICAgICdNZXNzYWdlOiAnICsgbXNnLFxyXG4vLyAgICAgICAnVVJMOiAnICsgdXJsLFxyXG4vLyAgICAgICAnTGluZTogJyArIGxpbmVObyxcclxuLy8gICAgICAgJ0NvbHVtbjogJyArIGNvbHVtbk5vLFxyXG4vLyAgICAgICAnRXJyb3Igb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpXHJcbi8vICAgICBdLmpvaW4oJyAtICcpXHJcbi8vICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gZmFsc2VcclxuLy8gfVxyXG53aW5kb3cub25lcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlLCB1cmwsIGxpbmUsIGNvbHVtbiwgZXJyb3IpIHtcclxuICBjb25zb2xlLmxvZygnbG9nLS0tb25lcnJvcjo6OjonLG1lc3NhZ2UsIHVybCwgbGluZSwgY29sdW1uLCBlcnJvcik7XHJcbn1cclxudGhyb3cgbmV3IEVycm9yKCd0aGlzIGlzIHRoZSBlcnJvciBoYXBwZW5lZCBpbiBiLmpzJyk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });