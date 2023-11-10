import { WebSocketServer } from 'ws';

const port = 8080 || process.env.PORT

const wss = new WebSocketServer({ port: port });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});