'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

var _ = require('../');

var _2 = _interopRequireDefault(_);

var debug = require('debug')('test/spec');

var msg = 'a sample error';
var err = new Error(msg);
var obj = { err: msg };

debug('starting tests...');

describe('throw-if', function () {

  it('should export a function', function () {
    _2['default'].should.be.a.Function;
  });

  it('should throw when given an Error', function () {
    (function () {
      return (0, _2['default'])(err);
    }).should['throw'](msg);
  });

  it('should throw when given a String', function () {
    (function () {
      return (0, _2['default'])(msg);
    }).should['throw'](msg);
  });

  it('should throw when given an Object', function () {
    (function () {
      return (0, _2['default'])(obj);
    }).should['throw'](JSON.stringify(obj));
  });
});