'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _configs = require('../configs');

var _configs2 = _interopRequireDefault(_configs);

var _promise = require('promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _token = '';

var setToken = function setToken(token) {
  _token = token;
};

var create = function create(issue) {
  return new _promise2.default(function (resolve, reject) {
    if (!_token) {
      reject({ message: 'Token is not set.', error: { message: 'TOKEN_NOT_SET', error: null } });
    }
    _axios2.default.post(_configs2.default.API_URL + 'issue', issue, {
      headers: { 'Authorization': _token }
    }).then(function (data) {
      resolve(data.data);
    }).catch(function (err) {
      reject(err.response.data);
    });
  });
};

exports.default = {
  setToken: setToken,
  create: create
};