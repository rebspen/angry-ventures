"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseQueryString = parseQueryString;

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

function parseQueryString() {
  var qs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';
  return new Map(qs.split(delimiter).map(function (item) {
    var _item$split$map = item.split('=').map(function (part) {
      return decodeURIComponent(part.trim());
    }),
        _item$split$map2 = (0, _toArray2.default)(_item$split$map),
        key = _item$split$map2[0],
        value = _item$split$map2.slice(1);

    return [key, value.join('=')];
  }));
}