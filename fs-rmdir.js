//  Syntax: fs.rmdir(path, options, callback)

const fs = require('fs')

fs.rmdir('test', () => {
    console.log('Folder deleted!')
})