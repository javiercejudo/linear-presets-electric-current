/*jshint node:true, mocha:true */

'use strict';

require('should');

var Decimal = require('linear-arbitrary-precision')(require('floating-adapter'));
var rescale = require('rescale')(Decimal).rescale;
var current = require('linear-preset-factory')(require('../src/linear-presets-electric-current'));

function convert(x, preset) {
  return Number(rescale(preset[0], preset[1], x));
}

function invert(preset) {
  return preset.slice(0).reverse();
}

describe('electric current presets', function() {
  it('should convert correctly', function() {
    convert(10, current.ampere_ampere).should.be.exactly(10);
    convert(0, current.ampere_ampere).should.be.exactly(0);

    convert(10, current.ampere_abampere).should.be.exactly(1);
    convert(0, current.ampere_abampere).should.be.exactly(0);
  });
});
