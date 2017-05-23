# bb-service-factory

Repository of common service factories.

# Installation

```
npm install matuszeman/bb-service-factory
```

# Usage

For ES5 compatible implementation use `require('bb-service-factory/es5/FACTORY')`.

# API

## Functions

<dl>
<dt><a href="#amqpConnection">amqpConnection(amqpConnectionOpts)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#mongoConnection">mongoConnection(mongoConnectionOpts)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#seneca">seneca(senecaOpts)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
</dl>

<a name="amqpConnection"></a>

## amqpConnection(amqpConnectionOpts) ⇒ <code>Promise</code>
**Kind**: global function  
**Requires**: <code>module:amqplib</code>  

| Param | Type |
| --- | --- |
| amqpConnectionOpts | <code>Object</code> | 
| amqpConnectionOpts.url | <code>String</code> | 

**Example**  
```js
dic.asyncFactory('amqpConnection', require('bb-dic-factory/src/amqp-connection.async-factory'));
```
<a name="mongoConnection"></a>

## mongoConnection(mongoConnectionOpts) ⇒ <code>Promise</code>
**Kind**: global function  
**Requires**: <code>module:mongodb</code>  

| Param | Type |
| --- | --- |
| mongoConnectionOpts |  | 
| mongoConnectionOpts.url | <code>String</code> | 

**Example**  
```js
dic.asyncFactory('mongoConnection', require('bb-dic-factory/src/mongo-connection.async-factory'));
```
<a name="seneca"></a>

## seneca(senecaOpts) ⇒ <code>Promise</code>
**Kind**: global function  
**Requires**: <code>module:seneca</code>  

| Param | Type |
| --- | --- |
| senecaOpts | <code>Object</code> | 

**Example**  
```js
dic.asyncFactory('seneca', require('bb-dic-factory/src/seneca.async-factory'));
```

# Development

Run the command below to builds es5 folder and README.md.

```
npm run build
```

## Tests

```
npm test
```
