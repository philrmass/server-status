module.exports =
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
/******/ 	__webpack_require__.p = "/server-status/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "QfWi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "EHQy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"home":"home__UoRM-"});

/***/ }),

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "KdXF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QP3f");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t("QP3f", 1);
/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EHQy");
//import { useCallback, useEffect, useState } from 'preact/hooks';



// ??? add server ip address, save in local storage.
// ??? allow server ip address editing
// ??? add /status to sonos-server to get status of all devices
function Home() {
  return h("div", {
    className: _Home_module_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].home
  }, h("div", null, "HOME"), h("div", null, "Server Status"), h("div", null, "v".concat(_package_json__WEBPACK_IMPORTED_MODULE_0__[/* version */ "a"])), h("button", null, "Do It @"), h("div", null, h("label", {
    for: "pet-select"
  }, "Choose a pet:"), h("select", {
    name: "pets",
    id: "pet-select"
  }, h("option", {
    value: ""
  }, "Please choose an option"), h("option", {
    value: "dog"
  }, "Dog"), h("option", {
    value: "cat"
  }, "Cat"), h("option", {
    value: "hamster"
  }, "Hamster"), h("option", {
    value: "parrot"
  }, "Parrot"), h("option", {
    value: "spider"
  }, "Spider"), h("option", {
    value: "goldfish"
  }, "Goldfish"))));
}
/*
import { TRIMET_API_KEY } from '../.env';

const TRIMET_URL = 'https://developer.trimet.org/ws/V2/arrivals?json=true&minutes=30&showPosition=false&';
const MS_PER_MIN = 60 * 1000;

export async function getArrivals(stopId, cache, useCache = true) {
  const now = Date.now();
  const last = useCache && cache.get(stopId, now);

  try {
    if (last) {
      return parseArrivals(last, now);
    }

    const response = await fetch(getUrl(stopId));
    const data = await response.json();

    cache.set(stopId, now, data);

    return parseArrivals(data, now);
  } catch (e) {
    console.error(`Fetch error (${e})`);
    return [];
  }
}
*/
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "MV5A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "QP3f":
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":\"0.1.3\"}");

/***/ }),

/***/ "QfWi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KdXF");
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xGyD");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MV5A");



function App() {
  return h(_components_Home__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], null);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "xGyD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map