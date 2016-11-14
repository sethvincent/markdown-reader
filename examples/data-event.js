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
