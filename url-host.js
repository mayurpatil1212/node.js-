//  Syntax: url.host

const myURL = new URL('https://dummywebsite.org/somepath/#ram')

console.log('Before changes')
console.log(myURL.href)

console.log('Host: ', myURL.host)

myURL.host = 'anotherdummywebsite.org'
console.log('After changes')
console.log('New URL: ', myURL.href)

const host = myURL.host
console.log('Host: ', host)