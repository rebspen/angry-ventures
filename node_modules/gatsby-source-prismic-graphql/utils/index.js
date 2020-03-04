"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerLinkResolver = registerLinkResolver;
exports.getCookies = getCookies;
exports.getDocumentIndexFromCursor = getDocumentIndexFromCursor;
exports.getCursorFromDocumentIndex = getCursorFromDocumentIndex;
exports.fetchStripQueryWhitespace = fetchStripQueryWhitespace;
exports.PrismicLink = PrismicLink;
exports.linkResolver = exports.typeName = exports.fieldName = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _apolloLinkContext = require("apollo-link-context");

var _apolloLinkHttp = require("apollo-link-http");

var _prismicJavascript = _interopRequireDefault(require("prismic-javascript"));

var _parseQueryString = require("./parseQueryString");

// @todo should this be configurable?
var fieldName = 'prismic';
exports.fieldName = fieldName;
var typeName = 'PRISMIC'; // keep link resolver function

exports.typeName = typeName;

var linkResolver = function linkResolver() {
  return '/';
};

exports.linkResolver = linkResolver;

function registerLinkResolver(link) {
  exports.linkResolver = linkResolver = link;
}

function getCookies() {
  return (0, _parseQueryString.parseQueryString)(document.cookie, ';');
}

function getDocumentIndexFromCursor(cursor) {
  return atob(cursor).split(':')[1];
}

function getCursorFromDocumentIndex(index) {
  return btoa("arrayconnection:".concat(index));
}

function fetchStripQueryWhitespace(url) {
  var _url$split = url.split('?'),
      _url$split2 = (0, _slicedToArray2.default)(_url$split, 2),
      hostname = _url$split2[0],
      _url$split2$ = _url$split2[1],
      qs = _url$split2$ === void 0 ? '' : _url$split2$;

  var queryString = (0, _parseQueryString.parseQueryString)(qs);

  if (queryString.has('query')) {
    queryString.set('query', String(queryString.get('query')).replace(/\#.*\n/g, '').replace(/\s+/g, ' '));
  }

  var updatedQs = Array.from(queryString).map(function (n) {
    return n.map(function (j) {
      return encodeURIComponent(j);
    }).join('=');
  }).join('&');
  var updatedUrl = "".concat(hostname, "?").concat(updatedQs);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return fetch.apply(void 0, [updatedUrl].concat(args));
}
/**
 * Apollo Link for Prismic
 * @param options Options
 */


function PrismicLink(_ref) {
  var uri = _ref.uri,
      accessToken = _ref.accessToken,
      customRef = _ref.customRef,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["uri", "accessToken", "customRef"]);
  var BaseURIReg = /^(https?:\/\/.+?\..+?\..+?)\/graphql\/?$/;
  var matches = uri.match(BaseURIReg);

  if (matches && matches[1]) {
    var prismicClient = _prismicJavascript.default.client("".concat(matches[1], "/api"), {
      accessToken: accessToken
    });

    var prismicLink = (0, _apolloLinkContext.setContext)(
    /*#__PURE__*/
    function () {
      var _ref2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(request, options) {
        var prismicRef, cookies, api, authorizationHeader;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (typeof window !== 'undefined' && document.cookie) {
                  cookies = getCookies();

                  if (cookies.has(_prismicJavascript.default.experimentCookie)) {
                    prismicRef = cookies.get(_prismicJavascript.default.experimentCookie);
                  } else if (cookies.has(_prismicJavascript.default.previewCookie)) {
                    prismicRef = cookies.get(_prismicJavascript.default.previewCookie);
                  }
                }

                if (prismicRef) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return prismicClient.getApi();

              case 4:
                api = _context.sent;
                prismicRef = api.masterRef.ref;

              case 6:
                authorizationHeader = accessToken ? {
                  Authorization: "Token ".concat(accessToken)
                } : {}; // if custom ref has been defined, then use that to pull content instead of default master ref

                prismicRef = typeof customRef === 'undefined' || customRef === null ? prismicRef : customRef;
                return _context.abrupt("return", {
                  headers: (0, _objectSpread2.default)({}, options.headers, authorizationHeader, {
                    'Prismic-ref': prismicRef
                  })
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    var httpLink = new _apolloLinkHttp.HttpLink((0, _objectSpread2.default)({
      uri: uri,
      useGETForQueries: true
    }, rest, {
      fetch: fetchStripQueryWhitespace
    }));
    return prismicLink.concat(httpLink);
  } else {
    throw new Error("".concat(uri, " isn't a valid Prismic GraphQL endpoint"));
  }
}