'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Seneca = require('seneca');

/**
 * @example dic.asyncFactory('seneca', require('@kapitchi/bb-dic-factory/src/seneca.async-factory'));
 * @requires seneca
 * @param {Object} senecaOpts
 * @returns {Promise}
 */
function senecaAsyncFactory(senecaOpts) {
  return new _promise2.default(function (resolve, reject) {
    var seneca = Seneca(senecaOpts).ready(function (err) {
      if (err) {
        return reject(err);
      }
      resolve(seneca);
    });
  });
}

module.exports = senecaAsyncFactory;