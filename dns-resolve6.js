// syntax - dns.resolve6(hostname, options, callback)

const dns = require('dns')

let ttl = { ttl: true}
dns.resolve6('abc.com', ttl, (error, address)=>{
    console.log('address: %j', address)
})
