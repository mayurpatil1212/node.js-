//  Syntax: buf.write( string, offset, length, encoding )

const { Buffer } = require('buffer');

const text = Buffer.from('This is some text')
text.write('THIS IS', 3)

console.log(text.toString())