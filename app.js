const express = require('express')
const app = express()
const cors =require ('cors')
app.use(cors());
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 }); // Initialize WebSocket server
var responce ='http  new'
wss.on('connection', function connection(ws) {
 responce='ws'
 
    ws.on('message', function message(data) {
    console.log('received: %s', data);
 
  console.log(responce);
  ws.send(responce);
  });
 
  ws.send(responce);
});




app.get('/', function (req, res) {
   //responce='http'
  res.send(responce)
  console.log(responce);
})

app.listen(3000)
