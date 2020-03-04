"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapPageElement = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _gatsby = require("gatsby");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _WrapPage = require("./components/WrapPage");

// Fixes proptypes warning for StaticQuery
if (_gatsby.StaticQuery && (0, _typeof2.default)(_gatsby.StaticQuery) === 'object' && _gatsby.StaticQuery.propTypes) {
  _gatsby.StaticQuery.propTypes.query = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
    id: _propTypes.default.string,
    source: _propTypes.default.string
  })]);
}

var wrapPageElement = function wrapPageElement(_ref, options) {
  var element = _ref.element,
      props = _ref.props;

  if (props.pageContext.rootQuery || props.pageContext.prismicPreviewPage) {
    return _react.default.createElement(_WrapPage.WrapPage, (0, _extends2.default)({
      key: props.location.key,
      options: options
    }, props), element);
  }

  return element;
};

exports.wrapPageElement = wrapPageElement;