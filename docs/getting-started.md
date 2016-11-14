# Getting started with markdown-reader

This module creates a Node stream that outputs an object for every markdown file and directory it finds in an array of directories.

It does this recursively, so it gets the files and directories in every subdirectory, too.

## Install

To install the module, make sure you have [Node](https://nodejs.org) installed, and that [npm](https://npmjs.org) is available on your machine (it's a package manage that is installed when you install Node).

Run the `npm install` command:

```sh
npm install --save markdown-reader
```

## Usage

Basic usage looks like this:

```js
var path = require('path')
var reader = require('markdown-reader')

var dir = path.join(__dirname, 'files')
reader(dir).on('data', console.log)
```

Here's an example that uses the `data` event from the stream to work with the markdown files:

```js
var path = require('path')
var keypath = require('obj-keypath')
var reader = require('../index')

var dir = path.join(__dirname, 'files')
var contents = {}

var stream = reader(dir)

stream.on('data', function (data) {
  if (data.type === 'directory') {
    keypath.set(contents, data.relname.split('/'), {})
  } else if (data.type === 'file') {
    keypath.set(contents, data.relname.split('/'), data)
  }
})

stream.on('end', function () {
  console.log(contents)
})
```
