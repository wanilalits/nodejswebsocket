const express = require('express');
const app = express();


const cors =require ('cors')
app.use(cors());

const httpServer = app.listen( process.env.PORT  )

const ws = require('ws');
const wss = new ws.Server({  Server: true });  // Initialize WebSocket server noServer: true  port: 3001

CLIENTS=[];




httpServer.on('upgrade', (req, socket, head) => {
  wss.handleUpgrade(req, socket, head, (ws) => {
 
    wss.emit('connection', ws, req)
  })
  
})


wss.on('connection', function connection(ws, req) {
  CLIENTS.push(ws);
 
     ws.on('message', function message(data) {
      sendAll(data);
   });
  
 });

   
 const sendAll= (message)=> {
  for (var i=0; i<CLIENTS.length; i++) {
      CLIENTS[i].send("Message: " + message);
  }
}


    


 app.get('/', function (req, res) {
 res.send("WELCOME--")
})
app.listen(process.env.PORT)
