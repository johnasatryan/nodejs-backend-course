const net = require('node:net');

const server = net.createServer((socket) => {
  console.log('Client connected...');
  console.log(socket.remoteAddress);
  console.log(socket.remotePort);
  socket.on('data', (data) => {
    console.log(data.toString());
  });
  socket.write('Hello world\n');
  // socket.end();
});

server.listen(3001, 'localhost', () => {
  console.log('Server is runing on port 3001');
});
