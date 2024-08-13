//  syntax: url.username

const http = require('url')

const myURL = new URL('https://ashish:ashish123@dummyWebsite.org/somepath/#ram')

console.log('Before changes')
console.log(myURL.href)

myURL.username = 'avinash'
console.log('After changes')
console.log(myURL.href)

const username = myURL.username
console.log(username)