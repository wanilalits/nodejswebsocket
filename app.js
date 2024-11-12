const express = require('express');
const app = express();
const http =require('http');
const cors =require ('cors')
const {Server} =require('socket.io')
app.use(cors());
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3001 }); // Initialize WebSocket server
const ws = require('ws')


const httpServer = app.listen(process.env.PORT)
console.log(httpServer)
const wsServer = new ws.Server({ noServer: true })

httpServer.on('upgrade', (req, socket, head) => {
  wsServer.handleUpgrade(req, socket, head, (ws) => {
    wsServer.emit('connection', ws, req)
  })
})






var responce ='http'
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
   //responce='http new'
  res.send(responce)
  console.log(responce);
})

//app.listen(3000)
