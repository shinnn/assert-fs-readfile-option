# assert-fs-readfile-option 

[![NPM version](https://img.shields.io/npm/v/assert-fs-readfile-option.svg)](https://www.npmjs.com/package/assert-fs-readfile-option)
[![Build Status](https://img.shields.io/travis/shinnn/assert-fs-readfile-option.svg)](https://travis-ci.org/shinnn/assert-fs-readfile-option)
[![Build status](https://ci.appveyor.com/api/projects/status/uq0hb488srr6n51i?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/assert-fs-readfile-option)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/assert-fs-readfile-option.svg)](https://coveralls.io/r/shinnn/assert-fs-readfile-option)
[![devDependency Status](https://david-dm.org/shinnn/assert-fs-readfile-option/dev-status.svg)](https://david-dm.org/shinnn/assert-fs-readfile-option#info=devDependencies)

Test if value is valid for [fs.readFile] options

```javascript
const assertFsReadFileOption = require('assert-fs-readfile-option');

assertFsReadFileOption({encoding: 'utf8', flag: 'r'}); // doesn't throw
assertFsReadFileOption({flag: 'foo'}); // Error: Unknown file open flag: sd

assertFsReadFileOption('base64'); // doesn't throw
assertFsReadFileOption('base65'); // Error: Unknown encoding: base65

assertFsReadFileOption(); // doesn't throw
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

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

[The Unlicense](./LICENSE)

[fs.readFile]: https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback
