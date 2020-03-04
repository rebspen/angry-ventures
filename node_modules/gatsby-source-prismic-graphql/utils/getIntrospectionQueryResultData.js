"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIntrospectionQueryResultData = void 0;

var getIntrospectionQueryResultData = function getIntrospectionQueryResultData(_ref) {
  var repositoryName = _ref.repositoryName;
  return new Promise(function (resolve, reject) {
    fetch("https://".concat(repositoryName, ".prismic.io/api")).then(function (r) {
      return r.json();
    }).then(function (data) {
      var ref = data.refs.find(function (r) {
        return r.id === 'master';
      });
      if (!ref) return;
      fetch("https://".concat(repositoryName, ".prismic.io/graphql?query=%7B%20__schema%20%7B%20types%20%7B%20kind%20name%20possibleTypes%20%7B%20name%20%7D%20%7D%20%7D%20%7D"), {
        headers: {
          'prismic-ref': ref.ref
        }
      }).then(function (result) {
        return result.json();
      }).then(function (result) {
        try {
          var filteredData = result.data.__schema.types.filter(function (type) {
            return type.possibleTypes !== null;
          });

          result.data.__schema.types = filteredData;
          resolve(result.data);
        } catch (err) {
          reject(err);
        }
      });
    });
  });
};

exports.getIntrospectionQueryResultData = getIntrospectionQueryResultData;