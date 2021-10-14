const WebSocket = require('ws');
 
const wss = new WebSocket.Server({
  port: 8080
});

wss.on('connection', function connection(ws) {
  console.log('server connection')
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
  var data = { name: "Eason", blog: "Let's Write" }
  setTimeout(function() {
    ws.send(JSON.stringify(data));
  }, 10000);
});