const net = require('node:net');
const { HOST, PORT } = require('./constants');

const client = net.createConnection({ host: HOST, port: PORT }, () => {
  console.log(`Connected to ${HOST}:${PORT}`);
});

client.setEncoding('utf8');

client.on('data', (data) => {
  process.stdout.write(data);
});

client.on('end', () => {
  console.log('Server closed the connection.');
});

client.on('close', () => {
  process.exit(0);
});

client.on('error', (err) => {
  console.error(`Connection error: ${err.message}`);
  process.exit(1);
});

process.stdin.on('data', (input) => {
  if (client.writable) {
    client.write(input.toString().trim() + '\n');
  }
});
