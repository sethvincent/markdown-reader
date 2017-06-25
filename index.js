var reader = require('folder-reader')
var rewrite = require('rewrite-markdown-urls')
var matter = require('gray-matter')
var marked = require('marked')

/**
Create a stream of markdown files from a set of directories.
* @name markdownReader
* @param {Array} dirs – The directories to read. Optionally can pass string path of one directory.
* @param {Object} options
* @param {Object} options.fs – alternate fs implementation, optional
* @param {String} options.encoding – encoding of files, default: utf8
* @param {String} options.filter – glob pattern for filtering files, default: '**\/*.md'
* @param {String} options.filter – array of glob patterns for filtering files, example: [`*.md`, `*.css`]
* @param {Function} options.map – A function you can use to map the contents of files after they are read
* @example
* var path = require('path')
* var reader = require('markdown-reader')
*
* var dir = path.join(__dirname, 'docs')
* reader(dir).on('data', console.log)
**/
module.exports = function markdownReader (dirs, options) {
  options = options || {}
  var filter = options.filter || '**/*.md'
  options.map = options.map || function (data, cb) { cb(data) }

  function map (data, cb) {
    if (options.rewriteUrls !== false) {
      data.file = rewrite(data.file, data)
    }

    var parsed = matter(data.file)
    data.markdown = parsed.content
    data.data = parsed.data
    data.html = marked(data.markdown)

    options.map(data, function (updated) {
      cb(updated)
    })
  }

  return reader(dirs, {
    map: map,
    filter: filter,
    fs: options.fs
  })
}
