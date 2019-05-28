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
/******/ 	return __webpack_require__(__webpack_require__.s = "./_js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_js/animations.js":
/*!***************************!*\
  !*** ./_js/animations.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let d = document;\nlet showThreshold = 150;\nlet hideThreshold = 100;\n\nlet runAnimations = (st) => {\n  fadeIn('fade-in', st);\n};\n\nlet fadeIn = (className, st) => {\n  let ea = d.querySelectorAll(`.${className}`);\n  ea.forEach(ele => {\n    // console.log(ele.offsetTop+showThreshold, st+window.innerHeight);\n    if(st+window.innerHeight>ele.offsetTop+showThreshold){\n      // console.log(\"show \", ele);\n      ele.classList.add(\"in-view\");\n    } else if(ele.offsetTop-hideThreshold>st+window.innerHeight) {\n      // console.log(\"hide\", ele);\n      ele.classList.remove(\"in-view\");\n    }\n  });\n  \n};\n\nmodule.exports.init = () => {\n  // console.log(\"animations init!\");\n  window.onscroll = (e) => {\n    runAnimations(window.pageYOffset);\n  };\n  runAnimations(window.pageYOffset);\n};\n\n//# sourceURL=webpack:///./_js/animations.js?");

/***/ }),

/***/ "./_js/comp-init.js":
/*!**************************!*\
  !*** ./_js/comp-init.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let carouselInit = () => {\n  $(document).ready(() => {\n    $('.carousel').carousel();\n  });\n};\nlet popoverInit = () => {\n  $(document).ready(() => {\n    let options = {\n      html: true,\n      container: 'body',\n      content: function() {\n        return $(\"#\"+$(this).attr(\"data-pop\")).html();\n      }\n    };\n    $('[data-toggle=\"popover\"]').popover(options)\n      .on(\"mouseenter\", function () {\n        if($(this).attr(\"data-trigger\")!=\"manual\")\n          return;\n        var _this = this;\n        $(this).popover(\"show\");\n        $(\".popover\").on(\"mouseleave\", function () {\n          $(_this).popover('hide');\n        });\n      })\n      .on(\"mouseleave\", function () {\n        if($(this).attr(\"data-trigger\")!=\"manual\")\n          return;\n        var _this = this;\n        setTimeout(function () {\n          if (!$(\".popover:hover\").length) {\n            $(_this).popover(\"hide\");\n          }\n        }, 300);\n      });\n  });\n};\n\nmodule.exports.init = () => {\n  popoverInit();\n  carouselInit();\n};\n\n//# sourceURL=webpack:///./_js/comp-init.js?");

/***/ }),

/***/ "./_js/insta-recent.js":
/*!*****************************!*\
  !*** ./_js/insta-recent.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports.init = () => {\n  fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${config.insta_at}&count=8`)\n    .then(response => {\n      return response.json();\n    })\n    .then(imgs => {\n      // console.log(imgs);\n      let template = document.querySelector(\"#footer-insta-port\").innerHTML;\n      let html = \"\";\n      imgs.data.forEach(img => {\n        html += `${template.replace('##__image_url__##', img.images.standard_resolution.url)\n                      .replace('##__insta_url__##', img.link)\n                      .replace('##__insta_comment__##', img.comments.count)\n                      .replace('##__insta_like__##', img.likes.count)}`;\n      });\n      document.querySelector(\"#footer-insta-port\").innerHTML = html;\n    });\n};\n\n//# sourceURL=webpack:///./_js/insta-recent.js?");

/***/ }),

/***/ "./_js/main.js":
/*!*********************!*\
  !*** ./_js/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations */ \"./_js/animations.js\");\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_animations__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _insta_recent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insta-recent */ \"./_js/insta-recent.js\");\n/* harmony import */ var _insta_recent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_insta_recent__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _comp_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comp-init */ \"./_js/comp-init.js\");\n/* harmony import */ var _comp_init__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_comp_init__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n_comp_init__WEBPACK_IMPORTED_MODULE_2___default.a.init();\n_animations__WEBPACK_IMPORTED_MODULE_0___default.a.init();\n_insta_recent__WEBPACK_IMPORTED_MODULE_1___default.a.init();\n\n//# sourceURL=webpack:///./_js/main.js?");

/***/ })

/******/ });