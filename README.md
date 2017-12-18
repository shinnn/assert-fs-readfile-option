# assert-fs-readfile-option

[![npm version](https://img.shields.io/npm/v/assert-fs-readfile-option.svg)](https://www.npmjs.com/package/assert-fs-readfile-option)
[![Build Status](https://travis-ci.org/shinnn/assert-fs-readfile-option.svg?branch=master)](https://travis-ci.org/shinnn/assert-fs-readfile-option)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/assert-fs-readfile-option.svg)](https://coveralls.io/github/shinnn/assert-fs-readfile-option?branch=master)

Test if a value is valid for [fs.readFile] options

```javascript
const assertFsReadFileOption = require('assert-fs-readfile-option');

assertFsReadFileOption({encoding: 'utf8', flag: 'r'});
// doesn't throw

assertFsReadFileOption({flag: 'foo'});
// throws `TypeError [ERR_INVALID_OPT_VALUE]: The value "foo" is invalid for option "flags"`

assertFsReadFileOption('base64');
// doesn't throw

assertFsReadFileOption('base65');
// throws `TypeError [ERR_INVALID_OPT_VALUE_ENCODING]: The value "base65" is invalid for option "encoding"`

assertFsReadFileOption();
// doesn't throw
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install assert-fs-readfile-option
```

## API

```javascript
const assertFsReadFileOption = require('assert-fs-readfile-option');
```

### assertFsReadFileOption([*maybeOption*])

*maybeOption*: any types

It throws an error when the argument is not a valid value for [fs.readFile] options. See [the test](./test.js) for more detailed specifications.

## License

[ISC License](./LICENSE) © 2017 Shinnosuke Watanabe

[fs.readFile]: https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
