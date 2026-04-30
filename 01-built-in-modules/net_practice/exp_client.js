const net = require('node:net');

const client = net.createConnection({ host: 'localhost', port: 3001 }, () => {
  console.log('Connected to the server');

  client.write('Hello server\n');
});

client.on('data', (data) => {
  console.log(`Data from server: ${data.toString()}`);
});
