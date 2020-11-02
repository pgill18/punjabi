var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function (request, response) {
    var requestUrl = url.parse(request.url)    
    response.writeHead(200)
    fs.createReadStream(__dirname+requestUrl.pathname).pipe(response)  // do NOT use fs's sync methods ANYWHERE on production (e.g readFileSync) 
}).listen(8100)   
console.log('Server running at http://localhost:8100/');
