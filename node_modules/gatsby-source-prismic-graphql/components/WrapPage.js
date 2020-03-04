"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapPage = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _gatsbySourceGraphqlUniversal = require("gatsby-source-graphql-universal");

var _lodash = require("lodash");

var _pathToRegexp = _interopRequireDefault(require("path-to-regexp"));

var _prismicJavascript = _interopRequireDefault(require("prismic-javascript"));

var _react = _interopRequireDefault(require("react"));

var _traverse = _interopRequireDefault(require("traverse"));

var _utils = require("../utils");

var _createLoadingScreen = require("../utils/createLoadingScreen");

var _getApolloClient = require("../utils/getApolloClient");

var _parseQueryString = require("../utils/parseQueryString");

var queryOrSource = function queryOrSource(obj) {
  if (typeof obj === 'string') {
    return obj.replace(/\s+/g, ' ');
  } else if (obj.source) {
    return String(obj.source).replace(/\s+/g, ' ');
  }

  return null;
};

var stripSharp = function stripSharp(query) {
  return (0, _traverse.default)(query).map(function (x) {
    if ((0, _typeof2.default)(x) === 'object' && x.kind == 'Name' && this.parent && this.parent.node.kind === 'Field' && x.value.match(/Sharp$/)) {
      this.parent.delete();
    }
  });
};

var WrapPage =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(WrapPage, _React$PureComponent);

  function WrapPage() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, WrapPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(WrapPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      data: _this.props.data,
      loading: false,
      error: null
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "keys", ['uid', 'id', 'lang']);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "load", function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref$variables = _ref.variables,
          variables = _ref$variables === void 0 ? {} : _ref$variables,
          query = _ref.query,
          _ref$fragments = _ref.fragments,
          fragments = _ref$fragments === void 0 ? [] : _ref$fragments,
          rest = (0, _objectWithoutProperties2.default)(_ref, ["variables", "query", "fragments"]);

      if (!query) {
        query = _this.getQuery();
      } else {
        query = queryOrSource(query);
      }

      fragments.forEach(function (fragment) {
        query += queryOrSource(fragment);
      });
      var keys = [].concat((0, _toConsumableArray2.default)(_this.props.options.passContextKeys || []), (0, _toConsumableArray2.default)(_this.keys));
      variables = (0, _objectSpread2.default)({}, (0, _lodash.pick)(_this.params, keys), variables);
      return (0, _getApolloClient.getApolloClient)(_this.props.options).then(function (client) {
        return client.query((0, _objectSpread2.default)({
          query: stripSharp((0, _gatsbySourceGraphqlUniversal.getIsolatedQuery)(query, _utils.fieldName, _utils.typeName)),
          fetchPolicy: 'network-only',
          variables: variables
        }, rest));
      });
    });
    return _this;
  }

  (0, _createClass2.default)(WrapPage, [{
    key: "getQuery",
    value: function getQuery() {
      var child = this.props.children;
      var query = queryOrSource((0, _lodash.get)(this.props.pageContext, 'rootQuery')) || '';

      if (child && child.type) {
        if (child.type.query) {
          query = queryOrSource(child.type.query) || '';
        }

        if (child.type.fragments && Array.isArray(child.type.fragments)) {
          child.type.fragments.forEach(function (fragment) {
            query += queryOrSource(fragment);
          });
        }
      }

      return query;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          pageContext = _this$props.pageContext,
          options = _this$props.options;
      var cookies = (0, _utils.getCookies)();
      var hasCookie = cookies.has(_prismicJavascript.default.experimentCookie) || cookies.has(_prismicJavascript.default.previewCookie);

      if (pageContext.rootQuery && options.previews !== false && hasCookie) {
        var closeLoading = (0, _createLoadingScreen.createLoadingScreen)();
        this.setState({
          loading: true
        });
        this.load().then(function (res) {
          _this2.setState({
            loading: false,
            error: null,
            data: (0, _objectSpread2.default)({}, _this2.state.data, {
              prismic: res.data
            })
          });

          closeLoading();
        }).catch(function (error) {
          _this2.setState({
            loading: false,
            error: error
          });

          console.error(error);
          closeLoading();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.cloneElement(children, (0, _objectSpread2.default)({}, children.props, {
        prismic: {
          options: this.props.options,
          loading: this.state.loading,
          error: this.state.error,
          load: this.load
        },
        data: this.state.data
      }));
    }
  }, {
    key: "params",
    get: function get() {
      var params = (0, _objectSpread2.default)({}, this.props.pageContext);
      var keys = [];
      var re = (0, _pathToRegexp.default)((0, _lodash.get)(this.props.pageContext, 'matchPath', ''), keys);
      var match = re.exec((0, _lodash.get)(this.props, 'location.pathname', ''));

      if (match) {
        keys.forEach(function (value, index) {
          if (!params[value.name]) {
            params[value.name] = match[index + 1];
          }
        });
      }

      var qs = (0, _parseQueryString.parseQueryString)(String((0, _lodash.get)(this.props, 'location.search', '?')).substr(1));
      this.keys.forEach(function (key) {
        if (!params[key] && qs.has(key)) {
          params[key] = qs.get(key);
        }
      });
      return params;
    }
  }]);
  return WrapPage;
}(_react.default.PureComponent);

exports.WrapPage = WrapPage;