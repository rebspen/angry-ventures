"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

exports.onRenderBody = function (_ref, options) {
  var setHeadComponents = _ref.setHeadComponents;
  var accessToken = options.previews ? null : options.accessToken;
  var components = [_react.default.createElement("script", {
    key: "prismic-config",
    dangerouslySetInnerHTML: {
      __html: "\n            window.prismic = {\n              endpoint: 'https://".concat(options.repositoryName, ".prismic.io/api/v2',\n            };\n            window.prismicGatsbyOptions = ").concat(JSON.stringify((0, _objectSpread2.default)({}, options, {
        accessToken: accessToken
      })), ";\n          ")
    }
  })];

  if (options.omitPrismicScript !== true) {
    components.push(_react.default.createElement("script", {
      key: "prismic-script",
      type: "text/javascript",
      src: "//static.cdn.prismic.io/prismic.min.js"
    }));
  }

  setHeadComponents(components);
};