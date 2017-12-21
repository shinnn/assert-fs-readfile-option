'use strict';

const readFile = require('fs').readFile;

const noop = require('nop');

module.exports = function assertFsReadFileOption(val) {
	readFile('', val, noop);
};
