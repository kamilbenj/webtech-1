// ./handles.js
const url = require('url')
const fs = require('fs')
const nodePath = require('path') 
const qs = require('querystring')

module.exports = {
  serverHandle: function (req, res) {
    const route = url.parse(req.url)
    const path = route.pathname 
    const params = qs.parse(route.query)

    if (path === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.write('hello takes a name query parameter (hello?name=[name]), if the parameter is a random name, it will reply reply hello [name], if the parameter is my name (Kamil), it will reply with a short intro of myself')
    }

    else if (path === '/hello' && 'name' in params) {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        if (params['name']==='kamil'){
            res.write('Hello, my name is Kamil, I am 20 years old, I study Cybersecurity in ECE Paris')
        }
        else {res.write('Hello ' + params['name'])}
    } 

    const slug = path.startsWith('/') ? path.slice(1) : path
    const filename = nodePath.join(__dirname, 'content', slug + '.json')

    if (fs.existsSync(filename)){
        const data = fs.readFileSync(filename, 'utf8')
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(data)
    }
    else {
        res.end('404 Not Found')
    }
    res.end()
  }
} 