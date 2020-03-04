"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PreviewPage", {
  enumerable: true,
  get: function get() {
    return _PreviewPage.default;
  }
});
Object.defineProperty(exports, "WrapPage", {
  enumerable: true,
  get: function get() {
    return _WrapPage.WrapPage;
  }
});
Object.defineProperty(exports, "withPreview", {
  enumerable: true,
  get: function get() {
    return _withPreview.withPreview;
  }
});
Object.defineProperty(exports, "PrismicLink", {
  enumerable: true,
  get: function get() {
    return _utils.PrismicLink;
  }
});
Object.defineProperty(exports, "getCookies", {
  enumerable: true,
  get: function get() {
    return _utils.getCookies;
  }
});
Object.defineProperty(exports, "getCursorFromDocumentIndex", {
  enumerable: true,
  get: function get() {
    return _utils.getCursorFromDocumentIndex;
  }
});
Object.defineProperty(exports, "getDocumentIndexFromCursor", {
  enumerable: true,
  get: function get() {
    return _utils.getDocumentIndexFromCursor;
  }
});
Object.defineProperty(exports, "registerLinkResolver", {
  enumerable: true,
  get: function get() {
    return _utils.registerLinkResolver;
  }
});
Object.defineProperty(exports, "linkResolver", {
  enumerable: true,
  get: function get() {
    return _utils.linkResolver;
  }
});
Object.defineProperty(exports, "fieldName", {
  enumerable: true,
  get: function get() {
    return _utils.fieldName;
  }
});
Object.defineProperty(exports, "typeName", {
  enumerable: true,
  get: function get() {
    return _utils.typeName;
  }
});

var _PreviewPage = _interopRequireDefault(require("./components/PreviewPage"));

var _WrapPage = require("./components/WrapPage");

var _withPreview = require("./components/withPreview");

var _utils = require("./utils");