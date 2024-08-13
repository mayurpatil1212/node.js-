//  Syntax: assert.equal(actual, expected[, message])
// Equal value :: 30 == '30'

const assert = require('assert')

let a = '30', b = 30
try {
    assert.equal(a, b)
    console.log('No error found')
} catch(error) {
    console.log('Error: ', error)
}