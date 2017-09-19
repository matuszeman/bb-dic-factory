const Seneca = require('seneca');

/**
 * @example dic.asyncFactory('seneca', require('@kapitchi/bb-dic-factory/src/seneca.async-factory'));
 * @requires seneca
 * @param {Object} senecaOpts
 * @returns {Promise}
 */
function senecaAsyncFactory(senecaOpts) {
  return new Promise((resolve, reject) => {
    const seneca = Seneca(senecaOpts).ready((err) => {
      if (err) {
        return reject(err);
      }
      resolve(seneca);
    });
  });
}

module.exports = senecaAsyncFactory;
