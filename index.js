'use strict';

var readFile = require('fs').readFile;

var noop = require('nop');

module.exports = function assertFsReadFileOption(val) {
	readFile('', val, noop);
};
