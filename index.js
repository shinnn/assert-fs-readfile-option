/*!
 * assert-fs-readfile-option | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/assert-fs-readfile-option
*/

'use strict';

var fs = require('fs');

var noop = require('nop');

module.exports = function assertFsReadFileOption(val) {
  fs.readFile('', val, noop);
};
