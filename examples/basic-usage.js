var path = require('path')
var reader = require('../index')

var dir = path.join(__dirname, 'files')
reader(dir).on('data', console.log)
