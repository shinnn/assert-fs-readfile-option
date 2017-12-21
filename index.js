'use strict';

const {readFile} = require('fs');

const noop = require('nop');

module.exports = function assertFsReadFileOption(val) {
	readFile('', val, noop);
};
