const express = require('express')
const app = express()
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 }); // Initialize WebSocket server

//wss.on('connection', function connection(ws) {
 
    //ws.on('message', function message(data) {
  //  console.log('received: %s', data);
  //  ws.send('Lalit');
  //});

  //ws.send('Lalit1');
//});




app.get('/', function (req, res) {
  res.send('Hello World..ok.')
})

app.listen(3000)
