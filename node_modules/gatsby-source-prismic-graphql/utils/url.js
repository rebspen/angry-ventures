"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _urlPattern = _interopRequireDefault(require("url-pattern"));

var _default = {
  parse: function parse(pattern, urlPathname) {
    var urlP = new _urlPattern.default(pattern);
    return urlP.match(urlPathname) || {};
  },
  build: function build(pattern) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return Object.keys(params).reduce(function (acc, key) {
      return acc.replace(":".concat(key), params[key]);
    }, pattern);
  },
  extractFixURL: function extractFixURL(urlPattern) {
    var regex = /^(\/.*)*\/(:uid)/;
    var matched = urlPattern.match(regex);

    if (matched) {
      var _matched = (0, _slicedToArray2.default)(matched, 2),
          fixURL = _matched[1];

      return fixURL;
    }
  }
};
exports.default = _default;