'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _seneca = require('seneca');

var _seneca2 = _interopRequireDefault(_seneca);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @example dic.asyncFactory('seneca', require('bb-dic-factory/src/seneca.async-factory'));
 * @requires seneca
 * @param {Object} senecaOpts
 * @returns {Promise}
 */
function seneca(senecaOpts) {
  return new _promise2.default(function (resolve, reject) {
    var seneca = (0, _seneca2.default)(senecaOpts).ready(function (err) {
      if (err) {
        return reject(err);
      }
      resolve(seneca);
    });
  });
}

module.exports = seneca;