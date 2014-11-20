'use strict';

var main = require('./');
var test = require('tape');

test('assertFsReadFileOption()', function(t) {
  t.plan(29);

  t.doesNotThrow(main.bind(null, {flag: 'r'}));
  t.doesNotThrow(main.bind(null, {flag: 1}));
  t.doesNotThrow(main.bind(null, {flag: ''}));
  t.doesNotThrow(main.bind(null, {flag: null}));
  t.doesNotThrow(main.bind(null, {flag: false}));
  t.doesNotThrow(main.bind(null, {flag: undefined}));
  t.doesNotThrow(main.bind(null, {encoding: 'utf8'}));
  t.doesNotThrow(main.bind(null, {encoding: ''}));
  t.doesNotThrow(main.bind(null, {encoding: null}));
  t.doesNotThrow(main.bind(null, {encoding: false}));
  t.doesNotThrow(main.bind(null, {encoding: undefined}));
  t.doesNotThrow(main.bind(null, {foo: true, bar: ['baz']}));
  t.doesNotThrow(main.bind(null, {}));
  t.doesNotThrow(main.bind(null, []));
  t.doesNotThrow(main.bind(null, Object));
  t.doesNotThrow(main.bind(null, Number));
  t.doesNotThrow(main.bind(null, [1234567890]));
  t.doesNotThrow(main.bind(null, 'base64'));
  t.doesNotThrow(main.bind(null, ''));
  t.doesNotThrow(main.bind(null, null));
  t.doesNotThrow(main.bind(null, false));
  t.doesNotThrow(main.bind(null, undefined));
  t.doesNotThrow(main.bind(null));

  t.throws(main.bind(null, {encoding: 'utf9'}));
  t.throws(main.bind(null, {encoding: 1}));
  t.throws(main.bind(null, {flag: 'foo'}));
  t.throws(main.bind(null, 'utf7'));
  t.throws(main.bind(null, 1));
  t.throws(main.bind(null, true));
});
