//  Syntax: assert.notDeepEqual(actual, expected)

const assert = require('assert')

try {
    assert.notDeepEqual('6', 21) // '6' !== 21
    console.log('No error found')
} catch(error) {
    console.log('Error- ', error)
}