'use strict';

const main = require('.');
const test = require('tape');

test('assertFsReadFileOption()', t => {
	t.doesNotThrow(() => main({flag: 'r'}));
	t.doesNotThrow(() => main({flag: 1}));
	t.doesNotThrow(() => main({flag: ''}));
	t.doesNotThrow(() => main({flag: null}));
	t.doesNotThrow(() => main({flag: false}));
	t.doesNotThrow(() => main({flag: undefined}));
	t.doesNotThrow(() => main({encoding: 'utf8'}));
	t.doesNotThrow(() => main({encoding: ''}));
	t.doesNotThrow(() => main({encoding: null}));
	t.doesNotThrow(() => main({encoding: false}));
	t.doesNotThrow(() => main({encoding: undefined}));
	t.doesNotThrow(() => main({foo: true, bar: ['baz']}));
	t.doesNotThrow(() => main({}));
	t.doesNotThrow(() => main([]));
	t.doesNotThrow(() => main(Object));
	t.doesNotThrow(() => main(Number));
	t.doesNotThrow(() => main([1234567890]));
	t.doesNotThrow(() => main('base64'));
	t.doesNotThrow(() => main(''));
	t.doesNotThrow(() => main(null));
	t.doesNotThrow(() => main(undefined));
	t.doesNotThrow(() => main(null));

	t.throws(() => main({encoding: 'utf9'}));
	t.throws(() => main({encoding: 1}));
	t.throws(() => main({flag: 'foo'}));
	t.throws(() => main('utf7'));
	t.throws(() => main(1));
	t.throws(() => main(true));
	t.throws(() => main(false));

	t.end();
});
