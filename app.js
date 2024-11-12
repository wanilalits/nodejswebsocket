const express = require('express');
const app = express();

const cors =require ('cors')
app.use(cors());

const httpServer = app.listen(process.env.PORT)


const ws = require('ws');
const wss = new ws.Server({  port: 3001 }); // Initialize WebSocket server noServer: true 



httpServer.on('upgrade', (req, socket, head) => {
  wss.handleUpgrade(req, socket, head, (ws) => {
    
    wss.emit('connection', ws, req)
  })
  console.log('dzhb')
})


wss.on('connection', function connection(ws) {
  responce='ws'
  
     ws.on('message', function message(data) {
     console.log('received: %s', data);
  
   console.log(responce);
   ws.send(responce);
   });
  
   ws.send(responce);
 });

   
    


  













