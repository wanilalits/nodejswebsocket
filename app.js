
import  express from "express";
const app = express();

var http = require('http')
var data =[
    {name :'Lalit1'}
]

let a = http.createServer(function(req,res){
    res.writeHead(200,{'Contant-Type':'application\json'})
    res.write(JSON.stringify(data))
    res.end()

}).listen(3001)

module.exports = app.a;