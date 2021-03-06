const {MongoClient}= require('mongodb');
const Joi = require('joi');

/**
 * @example dic.asyncFactory('mongoConnection', require('@kapitchi/bb-dic-factory/src/mongo-connection.async-factory'));
 * @requires mongodb
 * @param mongoConnectionOpts
 * @param {String} mongoConnectionOpts.url
 * @returns {Promise}
 */
function mongoConnection(mongoConnectionOpts) {
  mongoConnectionOpts = Joi.attempt(mongoConnectionOpts, {
    url: Joi.string().required()
  });
  return MongoClient.connect(mongoConnectionOpts.url);
}

module.exports = mongoConnection;
