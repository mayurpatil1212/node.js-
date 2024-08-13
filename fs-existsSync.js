//  Syntax: fs.existsSync(filepath)

const fs = require('fs')

const result = fs.existsSync('sample.txt')
console.log('sample file exists: ', result)