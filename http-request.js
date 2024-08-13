const http = require('http')

let options = {
    host: 'abc.com',
    path: '/browse',
    method: 'post'
}

http.request(options, (response)=> {
    console.log('Status: ', response.statusCode)
}).end()