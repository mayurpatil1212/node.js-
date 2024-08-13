//  Syntax: url.search

const http = require('url')

const myURL = new URL('https://dummyWebsite.org/?articles=node')

console.log('Before changes')
console.log(myURL.search)

const search = myURL.search
console.log('search: ', search)

myURL.search = 'articles=mongoDB'
console.log('After changes')
console.log(myURL.href)