import jsonOverTcp from 'json-over-tcp-2';

const port = 5001;
const server = jsonOverTcp.createServer({ port });

server.on('connection', (socket) => {
  socket.on('data', (data) => {
    console.log('Client data', data);
  });
});

server.listen(port, () => console.log('Server started'));
