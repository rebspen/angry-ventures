"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApolloClient = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloBoost = require("apollo-boost");

var _apolloCacheInmemory = require("apollo-cache-inmemory");

var _getIntrospectionQueryResultData = require("./getIntrospectionQueryResultData");

var _index = require("./index");

var client = undefined;

var getApolloClient =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var repositoryName, introspectionQueryResultData, fragmentMatcher;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            repositoryName = _ref.repositoryName;

            if (client) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return (0, _getIntrospectionQueryResultData.getIntrospectionQueryResultData)({
              repositoryName: repositoryName
            });

          case 4:
            introspectionQueryResultData = _context.sent;
            fragmentMatcher = new _apolloCacheInmemory.IntrospectionFragmentMatcher({
              introspectionQueryResultData: introspectionQueryResultData
            });
            client = new _apolloBoost.ApolloClient({
              cache: new _apolloCacheInmemory.InMemoryCache({
                fragmentMatcher: fragmentMatcher
              }),
              link: (0, _index.PrismicLink)({
                uri: "https://".concat(repositoryName, ".prismic.io/graphql"),
                credentials: 'same-origin'
              })
            });

          case 7:
            return _context.abrupt("return", client);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getApolloClient(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getApolloClient = getApolloClient;