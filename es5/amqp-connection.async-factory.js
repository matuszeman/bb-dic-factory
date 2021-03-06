'use strict';

var amqplib = require('amqplib');
var Joi = require('joi');

/**
 * @example dic.asyncFactory('amqpConnection', require('@kapitchi/bb-dic-factory/src/amqp-connection.async-factory'));
 * @requires amqplib
 * @param {Object} amqpConnectionOpts
 * @param {String} amqpConnectionOpts.url
 * @returns {Promise}
 */
function amqpConnection(amqpConnectionOpts) {
  amqpConnectionOpts = Joi.attempt(amqpConnectionOpts, {
    url: Joi.string().required()
  });
  return amqplib.connect(amqpConnectionOpts.url);
}

module.exports = amqpConnection;