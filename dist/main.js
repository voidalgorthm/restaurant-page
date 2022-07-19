/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/restaurant.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/restaurant.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/yoav-aziz-tKCd-IWc4gI-unsplash-large.jpg */ "./src/assets/yoav-aziz-tKCd-IWc4gI-unsplash-large.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Roboto:wght@300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-size: 62.5%;\n    --general-bgcolor: #bc002d;\n    --rgba-general: rgba(188, 0, 45, 1);\n\n    --grid-min: 25rem;\n}\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    text-align: center;\n}\n\nh1,\nh2,\nh3,\nh5,\np {\n    cursor: default;\n}\n\nh1 {\n    font-size: 4rem;\n}\n\nh2 {\n    font-size: 3.5rem;\n}\n\nh3 {\n    font-size: 2.5rem;\n}\n\nh5 {\n    font-size: 1.2rem;\n}\n\np {\n    font-size: 1.8rem;\n    cursor: default;\n}\n\nbutton {\n    cursor: pointer;\n    font-family: 'Roboto', sans-serif;\n}\n\ndiv#content {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    background-attachment: fixed;\n    min-height: 100vh;\n    font-family: 'Roboto', sans-serif;\n    display: flex;\n    /* flex: 1; */\n    flex-direction: column;\n    align-items: center;\n}\n\nheader {\n    width: 100%;\n    height: 100%;\n    background-image: radial-gradient(circle at bottom left, #bc002d 60px, transparent 60px),\n        radial-gradient(circle at top right, #bc002d 60px, transparent 60px);\n    min-height: 10vh;\n}\n\nnav {\n    width: 100%;\n    min-height: 10vh;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n\nmain {\n    background-color: rgba(188, 0, 45, 0.5);\n    color: white;\n    width: 85%;\n    margin: 3% 0;\n    border: 1px solid rgba(188, 0, 45, 0.25);\n    display: flex;\n    flex: 1;\n}\n\nfooter {\n    width: 100%;\n    background-color: burlywood;\n    min-height: 5vh;\n    display: grid;\n    place-items: center;\n    font-size: 1.4rem;\n}\n\n.tabs {\n    background-color: transparent;\n    border: 1px solid #000;\n    color: #FFF;\n    font-size: 4rem;\n}\n\n.tabs:hover {\n    font-weight: 900;\n    font-size: 4.3rem;\n}\n\n.active {\n    text-decoration: underline overline var(--general-bgcolor) .5rem;\n}\n\na {\n    text-decoration: none;\n    color: #000;\n}\n\na:hover {\n    color: var(--general-bgcolor);\n}\n\narticle {\n    width: 100%;\n}\n\n.flex-center,\n.flex-column,\n.flex-row {\n    display: flex;\n    align-items: center;\n\n}\n\n.flex-center {\n    justify-content: center;\n}\n\n.flex-column {\n    justify-content: space-evenly;\n    flex-direction: column;\n}\n\n.flex-row {\n    justify-content: space-between;\n}\n\n.grid-auto {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(var(--grid-min), 1fr));\n    grid-template-rows: repeat(auto-fill, minmax(auto, 1fr));\n    grid-auto-rows: minmax(var(--grid-min), 1fr);\n    gap: 1rem;\n}\n\n.padd {\n    padding: 1rem;\n    border-radius: 2rem;\n}\n\n.paddless {\n    border-radius: 2rem;\n}\n\n.gap {\n    gap: 1rem;\n}\n\n.head {\n    background-color: rgba(254, 106, 40, 0.75);\n    border: 1px solid rgba(254, 106, 40, 0.5);\n    width: 20rem;\n    height: 8rem;\n    margin: 1% 0;\n    clip-path: polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%);\n}\n\n.section,\n.container {\n    background-color: rgba(188, 0, 45, 1);\n    border: 1px solid rgba(188, 0, 45, 0.5);\n}\n\n.container {\n    clip-path: polygon(5% 0%, 95% 0%, 100% 5%, 100% 85%, 95% 90%, 85% 90%, 85% 100%, 70% 90%, 5% 90%, 0% 85%, 0% 5%);\n}\n\n.frame {\n    background-color: rgba(188, 0, 45, 0.75);\n    border: 1px solid rgba(188, 0, 45, 0.25);\n    display: grid;\n    grid-template-rows: auto auto 1fr;\n}\n\n.card {\n    background-color: rgba(188, 0, 45, 0.5);\n    border: 1px solid rgba(188, 0, 45, 0.25);\n}\n\n.food {\n    width: 100%;\n}\n\n.map {\n    width: min(60rem, 100%);\n}", "",{"version":3,"sources":["webpack://./src/styles/restaurant.css"],"names":[],"mappings":"AAEA;IACI,gBAAgB;IAChB,0BAA0B;IAC1B,mCAAmC;;IAEnC,iBAAiB;AACrB;;AAEA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;;;;;IAKI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,mDAAqE;IACrE,4BAA4B;IAC5B,2BAA2B;IAC3B,sBAAsB;IACtB,4BAA4B;IAC5B,iBAAiB;IACjB,iCAAiC;IACjC,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ;4EACwE;IACxE,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,uCAAuC;IACvC,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,wCAAwC;IACxC,aAAa;IACb,OAAO;AACX;;AAEA;IACI,WAAW;IACX,2BAA2B;IAC3B,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,6BAA6B;IAC7B,sBAAsB;IACtB,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,gEAAgE;AACpE;;AAEA;IACI,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,WAAW;AACf;;AAEA;;;IAGI,aAAa;IACb,mBAAmB;;AAEvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,6BAA6B;IAC7B,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sEAAsE;IACtE,wDAAwD;IACxD,4CAA4C;IAC5C,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,0CAA0C;IAC1C,yCAAyC;IACzC,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,0FAA0F;AAC9F;;AAEA;;IAEI,qCAAqC;IACrC,uCAAuC;AAC3C;;AAEA;IACI,gHAAgH;AACpH;;AAEA;IACI,wCAAwC;IACxC,wCAAwC;IACxC,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,uCAAuC;IACvC,wCAAwC;AAC5C;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Roboto:wght@300&display=swap');\n\n:root {\n    font-size: 62.5%;\n    --general-bgcolor: #bc002d;\n    --rgba-general: rgba(188, 0, 45, 1);\n\n    --grid-min: 25rem;\n}\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    text-align: center;\n}\n\nh1,\nh2,\nh3,\nh5,\np {\n    cursor: default;\n}\n\nh1 {\n    font-size: 4rem;\n}\n\nh2 {\n    font-size: 3.5rem;\n}\n\nh3 {\n    font-size: 2.5rem;\n}\n\nh5 {\n    font-size: 1.2rem;\n}\n\np {\n    font-size: 1.8rem;\n    cursor: default;\n}\n\nbutton {\n    cursor: pointer;\n    font-family: 'Roboto', sans-serif;\n}\n\ndiv#content {\n    background: url('../assets/yoav-aziz-tKCd-IWc4gI-unsplash-large.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    background-attachment: fixed;\n    min-height: 100vh;\n    font-family: 'Roboto', sans-serif;\n    display: flex;\n    /* flex: 1; */\n    flex-direction: column;\n    align-items: center;\n}\n\nheader {\n    width: 100%;\n    height: 100%;\n    background-image: radial-gradient(circle at bottom left, #bc002d 60px, transparent 60px),\n        radial-gradient(circle at top right, #bc002d 60px, transparent 60px);\n    min-height: 10vh;\n}\n\nnav {\n    width: 100%;\n    min-height: 10vh;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n\nmain {\n    background-color: rgba(188, 0, 45, 0.5);\n    color: white;\n    width: 85%;\n    margin: 3% 0;\n    border: 1px solid rgba(188, 0, 45, 0.25);\n    display: flex;\n    flex: 1;\n}\n\nfooter {\n    width: 100%;\n    background-color: burlywood;\n    min-height: 5vh;\n    display: grid;\n    place-items: center;\n    font-size: 1.4rem;\n}\n\n.tabs {\n    background-color: transparent;\n    border: 1px solid #000;\n    color: #FFF;\n    font-size: 4rem;\n}\n\n.tabs:hover {\n    font-weight: 900;\n    font-size: 4.3rem;\n}\n\n.active {\n    text-decoration: underline overline var(--general-bgcolor) .5rem;\n}\n\na {\n    text-decoration: none;\n    color: #000;\n}\n\na:hover {\n    color: var(--general-bgcolor);\n}\n\narticle {\n    width: 100%;\n}\n\n.flex-center,\n.flex-column,\n.flex-row {\n    display: flex;\n    align-items: center;\n\n}\n\n.flex-center {\n    justify-content: center;\n}\n\n.flex-column {\n    justify-content: space-evenly;\n    flex-direction: column;\n}\n\n.flex-row {\n    justify-content: space-between;\n}\n\n.grid-auto {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(var(--grid-min), 1fr));\n    grid-template-rows: repeat(auto-fill, minmax(auto, 1fr));\n    grid-auto-rows: minmax(var(--grid-min), 1fr);\n    gap: 1rem;\n}\n\n.padd {\n    padding: 1rem;\n    border-radius: 2rem;\n}\n\n.paddless {\n    border-radius: 2rem;\n}\n\n.gap {\n    gap: 1rem;\n}\n\n.head {\n    background-color: rgba(254, 106, 40, 0.75);\n    border: 1px solid rgba(254, 106, 40, 0.5);\n    width: 20rem;\n    height: 8rem;\n    margin: 1% 0;\n    clip-path: polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%);\n}\n\n.section,\n.container {\n    background-color: rgba(188, 0, 45, 1);\n    border: 1px solid rgba(188, 0, 45, 0.5);\n}\n\n.container {\n    clip-path: polygon(5% 0%, 95% 0%, 100% 5%, 100% 85%, 95% 90%, 85% 90%, 85% 100%, 70% 90%, 5% 90%, 0% 85%, 0% 5%);\n}\n\n.frame {\n    background-color: rgba(188, 0, 45, 0.75);\n    border: 1px solid rgba(188, 0, 45, 0.25);\n    display: grid;\n    grid-template-rows: auto auto 1fr;\n}\n\n.card {\n    background-color: rgba(188, 0, 45, 0.5);\n    border: 1px solid rgba(188, 0, 45, 0.25);\n}\n\n.food {\n    width: 100%;\n}\n\n.map {\n    width: min(60rem, 100%);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/restaurant.css":
/*!***********************************!*\
  !*** ./src/styles/restaurant.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_restaurant_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./restaurant.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/restaurant.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_restaurant_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_restaurant_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_restaurant_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_restaurant_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/icons sync \\.(png%7Cjpe?g%7Csvg)$":
/*!********************************************************************!*\
  !*** ./src/assets/icons/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./food-variant-templarian.png": "./src/assets/icons/food-variant-templarian.png",
	"./noodles.png": "./src/assets/icons/noodles.png",
	"./phone.png": "./src/assets/icons/phone.png",
	"./silverware-fork-knife.png": "./src/assets/icons/silverware-fork-knife.png",
	"./store-marker-coltonwiscombe.png": "./src/assets/icons/store-marker-coltonwiscombe.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/icons sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/assets/images sync \\.(png%7Cjpe?g%7Csvg)$":
/*!*********************************************************************!*\
  !*** ./src/assets/images/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./buta-no-shogayaki.jpg": "./src/assets/images/buta-no-shogayaki.jpg",
	"./champon.jpg": "./src/assets/images/champon.jpg",
	"./edamame.jpg": "./src/assets/images/edamame.jpg",
	"./gyoza.jpg": "./src/assets/images/gyoza.jpg",
	"./gyudon.jpg": "./src/assets/images/gyudon.jpg",
	"./kushikatsu.jpg": "./src/assets/images/kushikatsu.jpg",
	"./oden.jpg": "./src/assets/images/oden.jpg",
	"./ramen.jpg": "./src/assets/images/ramen.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/map.png */ "./src/assets/map.png");

function importIcons(r) {
  let icons = {};
  r.keys().map((item, index) => { icons[item.replace('../assets/icons/', '')] = r(item); });
  return icons;
}

const icons = importIcons(__webpack_require__("./src/assets/icons sync \\.(png%7Cjpe?g%7Csvg)$"));

const loadContact = (() => {
  const main = document.querySelector('main');
  main.replaceChildren();

  const _createParagraph = (text) => {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
  }

  const _createImage = (source) => {
    const img = document.createElement('img');
    img.classList.add('map');
    img.alt = `an image of ${source}`;
    img.src = source;
    img.title = `This is a sample screenshot of a part of Google Map. 
    All rights reserve to Google and all parties included in this part of the screenshot. 
    I declined to use the Google Map API for this instance as it only showcases a sample fictional store.`;
    return img;
  }

  const _createIcon = (source) => {
    const icon = document.createElement('img');
    icon.alt = `an icon of ${source}`;
    icon.src = icons[`./${source}`];
    return icon;
  }

  /* const _createContainer = (...elements) => {
    const container = document.createElement('div');
    container.classList.add('flex-column');
    container.classList.add('padd');
    container.classList.add('container');
    container.classList.add('gap');
    elements.forEach(item => container.appendChild(item));
    return container;
  } */

  const _createCard = (...elements) => {
    const card = document.createElement('div');
    card.classList.add('flex-column');
    card.classList.add('padd');
    card.classList.add('card');
    elements.forEach(item => card.appendChild(item));
    return card;
  }

  const _createSection = (...elements) => {
    const section = document.createElement('div');
    section.classList.add('flex-row');
    section.classList.add('padd');
    section.classList.add('section');
    section.classList.add('gap');
    elements.forEach(item => section.appendChild(item));
    return section;
  }

  const contact = document.createElement('article');
  contact.classList.add('flex-column');
  contact.classList.add('gap');

  const title = document.createElement('h2');
  title.textContent = 'Order Now!';
  const p1 = _createParagraph('81-03-3224-9999');
  const p2 = _createParagraph('1-1 Maihama, Urayasu, Chiba 279-0031, Japan', );
  const map = _createImage(_assets_map_png__WEBPACK_IMPORTED_MODULE_0__);

  const div1 = _createSection(_createIcon('noodles.png'),title);
  const div2 = _createSection(_createIcon('phone.png') , p1);
  const address = _createSection(_createIcon('store-marker-coltonwiscombe.png') , p2);
  const div3 = _createCard(map, address);

  contact.appendChild(div1);
  contact.appendChild(div2);
  contact.appendChild(div3);

  main.appendChild(contact);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function importIcons(r) {
  let icons = {};
  r.keys().map((item, index) => { icons[item.replace('../assets/icons/', '')] = r(item); });
  return icons;
}

const icons = importIcons(__webpack_require__("./src/assets/icons sync \\.(png%7Cjpe?g%7Csvg)$"));

const loadHome = (() => {
  const main = document.querySelector('main');
  main.replaceChildren();

  const _createParagraph = (text) => {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
  }

  const _createIcon = (source) => {
    const icon = document.createElement('img');
    icon.alt = `an icon of ${source}`;
    icon.src = icons[`./${source}`];
    return icon;
  }

  const _createSection = (...elements) => {
    const section = document.createElement('div');
    section.classList.add('flex-row');
    section.classList.add('padd');
    section.classList.add('section');
    section.classList.add('gap');
    elements.forEach(item => section.appendChild(item));
    return section;
  }

  const _createContainer = (...elements) => {
    const container = document.createElement('div');
    container.classList.add('flex-center');
    container.classList.add('padd');
    container.classList.add('container');
    elements.forEach(item => container.appendChild(item));
    return container;
  }

  const home = document.createElement('article');
  home.classList.add('flex-column');
  const title = document.createElement('h2');
  title.textContent = 'Japanese Dishes You Need To Try in Tokyo!';
  const p1 = _createParagraph('Japanese cuisine is world-famous, but there is so much food in Japan to try besides sushi! Of course, many of us also know of sashimi, tempura, and ramen. Yet Japanese food culture is much richer than that.');
  const p2 = _createParagraph('So when visiting the country, what food in Japan should be on your bucket list? To help you decide, we\'ve compiled this list of tasty Japanese foods that everyone needs to try.');

  const div1 = _createSection(_createIcon('noodles.png'), title);
  const div2 = _createContainer(p1);
  const div3 = _createContainer(p2);

  home.appendChild(div1);
  home.appendChild(div2);
  home.appendChild(div3);

  main.appendChild(home);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function importIcons(r) {
  let icons = {};
  r.keys().map((item, index) => { icons[item.replace('../assets/icons/', '')] = r(item); });
  return icons;
}

const icons = importIcons(__webpack_require__("./src/assets/icons sync \\.(png%7Cjpe?g%7Csvg)$"));

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('../assets/images', '')] = r(item); });
  return images;
}

const images = importAll(__webpack_require__("./src/assets/images sync \\.(png%7Cjpe?g%7Csvg)$"));

class Menu {
  constructor(label, src, desc) {
    this.label = label;
    this.src = src;
    this.desc = desc;
  }
}

const _restaurantMenu = (() => {
  let _menu = [];
  const getMenu = () => _menu;
  const clearMenu = () => _menu = [];
  const createFood = (label, src, desc) => {
    if(_menu.some(item => item.label === label)) return;
    
    const food = new Menu(label, src, desc);
    _menu.push(food);
  }
  return {
    getMenu,
    createFood,
    clearMenu,
  }
})();

const loadMenu = (() => {
  const main = document.querySelector('main');
  main.replaceChildren();

  const _createFrame = (...elements) => {
    const frame = document.createElement('div');
    frame.classList.add('flex-column');
    frame.classList.add('paddless');
    frame.classList.add('frame');
    elements.forEach(item => frame.appendChild(item));
    return frame;
  }

  const _createCard = (...elements) => {
    const card = document.createElement('div');
    card.classList.add('padd');
    card.classList.add('card');
    elements.forEach(item => card.appendChild(item));
    return card;
  }

  const _createHolder = (element) => {
    const holder = document.createElement('div');
    holder.classList.add('paddless');
    holder.classList.add('card');
    holder.appendChild(element);
    return holder;
  }

  const _createLabel = (text) => {
    const heading = document.createElement('h3');
    heading.textContent = text;
    return heading;
  }

  const _createIcon = (source) => {
    const icon = document.createElement('img');
    icon.alt = `an icon of ${source}`;
    icon.src = icons[`./${source}`];
    return icon;
  }

  const _createImage = (source) => {
    const img = document.createElement('img');
    img.alt = `an image of ${source}`;
    img.src = images[`./${source}`];
    img.classList.add('food');
    return img;
  }

  const _createParagraph = (text) => {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
  }

  const menu = document.createElement('article');
  menu.classList.add('grid-auto');

  _restaurantMenu.createFood('Buta-No-Shogayaki', 'buta-no-shogayaki.jpg', 'The word yaki means literally “grilled.” This dish is prepared by grilling thin slices of pork dressed with a delicate sauce of mirin, soy sauce, sake (Japanese rice wine), granola oil mixed with sliced onions, and ginger.');
  _restaurantMenu.createFood('Champon', 'champon.jpg', 'Champon is originally from Nagasaki, as it first appeared there in a Chinese restaurant during the Meiji era (1868-1912). However, unlike the many different kinds of ramen, its noodles (specifically made for this dish) are boiled in the soup itself instead of being added later.');
  _restaurantMenu.createFood('Edamame', 'edamame.jpg', 'A popular food in Japan. These are not yet mature soybeans, still in their pods. They can be served hot or cold (at times grilled instead of boiled) and are usually dressed only with salt. Edamame make for an amazing appetizer.');
  _restaurantMenu.createFood('Gyoza', 'gyoza.jpg', 'Gyoza comes in several varieties in Japan. One of the most popular is "yaki-gyoza": the dumplings are prepared with a filling of minced pork meat, cabbage, garlic, onion, and ginger. They are then lightly fried until they become crunchy and of a nice dark-gold color.');
  _restaurantMenu.createFood('Gyudon','gyudon.jpg','A bawl of steamed rice is topped with thinly sliced beef and tender onion, simmered in dashi broth (a popular Japanese ingredient) and seasoned with mirin and soy sauce. Sometimes it’s served topped with a lightly cooked egg.');
  _restaurantMenu.createFood('Kushikatsu','kushikatsu.jpg','This dish, also known as kushiage, is crunchy deep-fried skewered meat, fish, or vegetables. The etymology refers to its preparation, with Kushi referring to the skewers used and katsu, meaning the deep frying of a cutlet of meat.');
  _restaurantMenu.createFood('Oden','oden.jpg','Oden is a tasty, light, hot dish you’d especially enjoy on those cold winter days. This is another variety of one-pot dishes consisting of several ingredients (usually eggs, konjac, fish cakes, and daikon) served in a dashi and soy soup.');
  _restaurantMenu.createFood('Ramen','ramen.jpg','The broth can be based on chicken, pork, beef, fish, vegetables, and flavored with soy sauce, miso, dashi, and many other seasonings. Usually, scallion, seaweed, tofu, and bamboo shoots are added, but it’s impossible to list all the different combinations in which this dish can be served.');
  // _restaurantMenu.createFood('','','');
  
  const menuItems = _restaurantMenu.getMenu();
  console.log(_restaurantMenu.getMenu());
  menuItems.forEach(item => {
    let title, visual, desc;
    Object.entries(item).forEach(([key, value]) => {
      switch (key) {
        case 'label': title = _createCard(_createIcon('food-variant-templarian.png'), _createLabel(value)); break;
        case 'src': visual = _createHolder(_createImage(value)); break;
        case 'desc': desc = _createCard(_createParagraph(value)); break;
      }
    });
    title.classList.add('flex-row');
    menu.appendChild(_createFrame(title, visual, desc));
  });
  main.appendChild(menu);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/modules/page.js":
/*!*****************************!*\
  !*** ./src/modules/page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function importIcons(r) {
  let icons = {};
  r.keys().map((item, index) => { icons[item.replace('../assets/icons/', '')] = r(item); });
  return icons;
}

const icons = importIcons(__webpack_require__("./src/assets/icons sync \\.(png%7Cjpe?g%7Csvg)$"));

const loadPage = (() => {
  const _createContainer = (...elements) => {
    const container = document.createElement('div');
    container.classList.add('flex-center');
    container.classList.add('padd');
    elements.forEach(item => container.appendChild(item));
    return container;
  }

  const _createContent = (...content) => {
    const container = document.createElement('div');
    console.log(content);
    content.forEach(item => container.append(item));
    container.classList.add('flex-center');
    container.classList.add('padd');
    container.classList.add('gap');
    return container;
  }

  const _createLink = (lnk, text) => {
    const link = document.createElement('a');
    link.href = lnk;
    const txt = document.createTextNode(text);
    link.appendChild(txt);
    return link;
  }

  const _createIcon = (source) => {
    const icon = document.createElement('img');
    icon.alt = `an icon of ${source}`;
    icon.src = icons[`./${source}`];
    return icon;
  }

  const _createBtn = (label) => {
    const btn = document.createElement('button');
    btn.setAttribute('id', label);
    btn.textContent = label.toUpperCase();
    btn.classList.add('tabs');
    return btn;
  }

  const _createHeader = (id, txt) => {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const text = document.createElement('h1');
    text.textContent = txt;
    const icon = _createIcon('silverware-fork-knife.png');
    const container = _createContainer(icon, text);
    container.classList.add('head');
    header.appendChild(container);
    header.classList.add('flex-column');
    return header;
  }

  const _createNav = (id) => {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);

    const homeBtn = _createBtn('home');
    const menuBtn = _createBtn('menu');
    const contactBtn = _createBtn('contact');

    homeBtn.classList.add('active');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    return nav;
  }

  const _createMain = (id) => {
    const main = document.createElement('main');
    main.setAttribute('id', id);
    main.classList.add('padd');
    return main;
  }

  const _createFooter = (...elements) => {
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    footer.classList.add('flex-row');
    elements.forEach(item => footer.appendChild(item))
    return footer;
  }

  const content = document.querySelector('#content');
  const header = _createHeader('header', 'Tsukiji');
  content.appendChild(header);
  const nav = _createNav('nav');
  content.appendChild(nav);
  const tabContent = _createMain('tab');
  content.appendChild(tabContent);
  const creds1 = _createContent(`Icons on`, _createLink('https://materialdesignicons.com/', 'Material Design Icons'));
  const creds2 = _createContent('Content by', _createLink('https://livejapan.com/en/in-tokyo/in-pref-tokyo/in-tsukiji/article-a0002670/','Lucio Maurizi on Live Japan'));
  const creds3 = _createContent('Photo by', _createLink('https://unsplash.com/@yoavaziz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText', 'Yoav Aziz'), 'on', _createLink('https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText', 'Unsplash'));
  const creds4 = _createContent('codexeger ©2022');
  const footer = _createFooter(creds1, creds2, creds3, creds4);
  content.appendChild(footer);
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

/***/ }),

/***/ "./src/assets/icons/food-variant-templarian.png":
/*!******************************************************!*\
  !*** ./src/assets/icons/food-variant-templarian.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "food-variant-templarian.png";

/***/ }),

/***/ "./src/assets/icons/noodles.png":
/*!**************************************!*\
  !*** ./src/assets/icons/noodles.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "noodles.png";

/***/ }),

/***/ "./src/assets/icons/phone.png":
/*!************************************!*\
  !*** ./src/assets/icons/phone.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "phone.png";

/***/ }),

/***/ "./src/assets/icons/silverware-fork-knife.png":
/*!****************************************************!*\
  !*** ./src/assets/icons/silverware-fork-knife.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "silverware-fork-knife.png";

/***/ }),

/***/ "./src/assets/icons/store-marker-coltonwiscombe.png":
/*!**********************************************************!*\
  !*** ./src/assets/icons/store-marker-coltonwiscombe.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "store-marker-coltonwiscombe.png";

/***/ }),

/***/ "./src/assets/images/buta-no-shogayaki.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/buta-no-shogayaki.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "buta-no-shogayaki.jpg";

/***/ }),

/***/ "./src/assets/images/champon.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/champon.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "champon.jpg";

/***/ }),

/***/ "./src/assets/images/edamame.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/edamame.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "edamame.jpg";

/***/ }),

/***/ "./src/assets/images/gyoza.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/gyoza.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "gyoza.jpg";

/***/ }),

/***/ "./src/assets/images/gyudon.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/gyudon.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "gyudon.jpg";

/***/ }),

/***/ "./src/assets/images/kushikatsu.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/kushikatsu.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "kushikatsu.jpg";

/***/ }),

/***/ "./src/assets/images/oden.jpg":
/*!************************************!*\
  !*** ./src/assets/images/oden.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "oden.jpg";

/***/ }),

/***/ "./src/assets/images/ramen.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/ramen.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ramen.jpg";

/***/ }),

/***/ "./src/assets/map.png":
/*!****************************!*\
  !*** ./src/assets/map.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "map.png";

/***/ }),

/***/ "./src/assets/yoav-aziz-tKCd-IWc4gI-unsplash-large.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/yoav-aziz-tKCd-IWc4gI-unsplash-large.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "yoav-aziz-tKCd-IWc4gI-unsplash-large.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page */ "./src/modules/page.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");
/* harmony import */ var _styles_restaurant_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/restaurant.css */ "./src/styles/restaurant.css");






const addEvents = () => {
  const tabs = document.querySelectorAll('.tabs');
  tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
      if (event.target.classList.contains('active')) return;

      switch (tab.id) {
        case 'home': (0,_modules_home__WEBPACK_IMPORTED_MODULE_1__["default"])(); changeButtonSelected(tab.id); break;
        case 'menu': (0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__["default"])(); changeButtonSelected(tab.id); break;
        case 'contact': (0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__["default"])(); changeButtonSelected(tab.id); break;
      }
    })
  });
};

const changeButtonSelected = (id) => {
  const tabs = document.querySelectorAll('.tabs');
  tabs.forEach(button => {
    if (button.id === id) button.classList.add('active');
    else button.classList.remove('active');
  });
}

init();

function init() {
  addEvents();
  _modules_page__WEBPACK_IMPORTED_MODULE_0__["default"];
  (0,_modules_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
};
})();

/******/ })()
;
//# sourceMappingURL=main.js.map