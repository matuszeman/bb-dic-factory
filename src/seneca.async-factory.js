import Seneca from 'seneca';

/**
 * @example dic.asyncFactory('seneca', require('bb-dic-factory/src/seneca.async-factory'));
 * @requires seneca
 * @param {Object} senecaOpts
 * @returns {Promise}
 */
function seneca(senecaOpts) {
  return new Promise((resolve, reject) => {
    const seneca = Seneca(senecaOpts).ready((err) => {
      if (err) {
        return reject(err);
      }
      resolve(seneca);
    });
  });
}

module.exports = seneca;
