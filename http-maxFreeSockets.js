// Syntax: agent.maxFreeSockets

const http = require('http')
const Agent = require('agentkeepalive')
const keepAliveAgent = new Agent({})

console.log(keepAliveAgent.maxFreeSockets)