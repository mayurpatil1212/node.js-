const http = require('http')

http
.createServer((request, response)=> {
    response.end('This is http module')
})
.listen(3000, function(){
    console.log('Server is on port 3000')
})