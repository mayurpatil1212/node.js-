// Syntax - dns.resolve4(hostname, options, callback)

const dns = require('dns')

let ttl = { ttl: true}
dns.resolve4('abc.com', ttl, (error, address)=>{
    console.log('address: %j', address)
})
