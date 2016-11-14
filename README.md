# markdown-reader

Create a stream of markdown files from a set of directories.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]
[![conduct][conduct]][conduct-url]

[npm-image]: https://img.shields.io/npm/v/markdown-reader.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/markdown-reader
[travis-image]: https://img.shields.io/travis/sethvincent/markdown-reader.svg?style=flat-square
[travis-url]: https://travis-ci.org/sethvincent/markdown-reader
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[conduct]: https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-green.svg?style=flat-square
[conduct-url]: CONDUCT.md

## About

markdown-reader is a library for reading a collection of markdown files, and making them easy to use in tools like static site generators.

- urls are rewritten (optionally) from github-style relative links to absolute links appropriate for static html
- frontmatter yaml is parsed into an object
- markdown is transformed into html

## Install

```sh
npm install --save markdown-reader
```

## Usage

```js
var path = require('path')
var reader = require('markdown-reader')

var dir = path.join(__dirname, 'files')
reader(dir).on('data', console.log)
```

## Documentation
- [Getting started](docs/getting-started.md)
- [API](docs/api.md)
- [Tests](tests/)

### Examples
- [Basic example](examples/basic.js)
- [Using the stream's `data` event](examples/data-event.js)

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## Conduct

It is important that this project contributes to a friendly, safe, and welcoming environment for all. Read this project's [code of conduct](CONDUCT.md)

## Changelog

Read about the changes to this project in [CHANGELOG.md](CHANGELOG.md). The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## Contact

- **chat** – You can chat about this project at []()
- **issues** – Please open issues in the [issues queue](https://github.com/sethvincent/markdown-reader/issues)
- **twitter** – Have a question? [@sethdvincent](https://twitter.com/sethdvincent)
- **email** – Need in-depth support via paid contract? Send an email to sethvincent@gmail.com

## License

[ISC](LICENSE.md)