'use strict';

import should from 'should';
import throwIf from '../';

let debug = require('debug')('test/spec');

const msg = 'a sample error';
const err = new Error(msg);
const obj = { err: msg };

debug('starting tests...');

describe('throw-if', () => {

  it('should export a function', () => {
    (throwIf).should.be.a.Function;
  });

  it('should throw when given an Error', () => {
    (() => throwIf(err)).should.throw(msg);
  });

  it('should throw when given a String', () => {
    (() => throwIf(msg)).should.throw(msg);
  });

  it('should throw when given an Object', () => {
    (() => throwIf(obj)).should.throw(JSON.stringify(obj));
  });

});
