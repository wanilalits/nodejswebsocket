console.log('..')
var http = require('http')
var data =[
    {name :'Lalit'}
]

http.createServer(function(req,res){
    res.writeHead(200,{'Contant-Type':'application\json'})
    res.write(JSON.stringify(data))
    res.end()

}).listen(3001)
