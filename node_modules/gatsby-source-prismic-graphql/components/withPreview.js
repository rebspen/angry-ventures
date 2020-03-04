"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withPreview = void 0;

var _react = _interopRequireDefault(require("react"));

var _WrapPage = require("./WrapPage");

var withPreview = function withPreview(render, query) {
  var fragments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (typeof window === 'undefined') {
    return render;
  }

  if (!render) {
    return null;
  }

  var RenderComponent = function RenderComponent(_ref) {
    var data = _ref.data;
    return render(data);
  };

  var rootQuery = "".concat(query.source).concat(fragments.map(function (fragment) {
    return fragment && fragment.source ? fragment.source : '';
  }).join(' '));
  return function (data) {
    return _react.default.createElement(_WrapPage.WrapPage, {
      data: data,
      pageContext: {
        rootQuery: rootQuery
      },
      options: window.prismicGatsbyOptions || {}
    }, _react.default.createElement(RenderComponent, null));
  };
};

exports.withPreview = withPreview;