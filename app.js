const express = require('express');
const app = express();

const cors =require ('cors')
app.use(cors());

const httpServer = app.listen(process.env.PORT)


const ws = require('ws');
const wss = new ws.Server({ noServer: true  }); // Initialize WebSocket server  port: 3001


wss.on('connection', function connection(ws) {
  responce='ws'
  
     ws.on('message', function message(data) {
     console.log('received: %s', data);
  
   console.log(responce);
   ws.send(responce);
   });
  
   ws.send(responce);
 });

   
    


  













