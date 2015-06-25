'use strict';

var fs = require('fs');

var noop = require('nop');

module.exports = function assertFsReadFileOption(val) {
  fs.readFile('', val, noop);
};
