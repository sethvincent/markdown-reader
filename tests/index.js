var path = require('path')
var test = require('tape')
var reader = require('../index')

var dir = path.join(__dirname, 'fixtures')

test('read a directory', function (t) {
  var stream = reader(dir)
  var contents = {}

  stream.on('data', function (data) {
    if (data.type === 'file') contents[data.relname] = data.file
  })

  stream.on('end', function () {
    var keys = Object.keys(contents)
    t.equal(keys.length, 2)
    t.end()
  })
})

test('filter results', function (t) {
  var stream = reader(dir, { filter: 'b/*.md' })
  var contents = {}

  stream.on('data', function (data) {
    if (data.type === 'file') contents[data.relname] = data.file
  })

  stream.on('end', function () {
    var keys = Object.keys(contents)
    t.equal(keys.length, 1)
    t.end()
  })
})

test('map results', function (t) {
  var stream = reader(dir, { map: function (data, cb) {
    data.file = 'hi'
    cb(data)
  }})

  var contents = {}

  stream.on('data', function (data) {
    if (data.type === 'file') contents[data.relname] = data.file
  })

  stream.on('end', function () {
    Object.keys(contents).forEach(function (key) {
      var data = contents[key]
      t.equal(data, 'hi')
    })

    t.end()
  })
})
