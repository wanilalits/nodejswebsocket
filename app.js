//import { WebSocketServer } from 'ws';

//const wss = new WebSocketServer({ port: 8080 });

//wss.on('connection', function connection(ws) {
 
    //ws.on('message', function message(data) {
  //  console.log('received: %s', data);
  //  ws.send('Lalit');
  //});

  //ws.send('Lalit1');
//});


const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World..ok...')
})

app.listen(3000)