const net = require('node:net');
const { HOST, PORT, MAX_CLIENTS } = require('../shared/constants');
const { parseCommand } = require('../shared/protocol');

const clients = new Map();

function broadcast(message, fromSocket) {
  for (const socket of clients.values()) {
    if (socket !== fromSocket) {
      socket.write(message + '\n');
    }
  }
}

const server = net.createServer((socket) => {
  socket.setEncoding('utf-8');

  if (clients.size >= MAX_CLIENTS) {
    socket.write(`Server is full (max ${MAX_CLIENTS} clients) \n`);
    socket.end();
    return;
  }

  console.log(
    `New connection from ${socket.remoteAddress}: ${socket.remotePort}`,
  );

  let username = null;

  socket.write('Welcome! Please enter your username: \n');

  socket.on('data', (data) => {
    const text = data.toString().trim();

    if (!text) return;

    if (username === null) {
      if (clients.has(text)) {
        socket.write(`Username ${text} is taken. Try another one`);
        return;
      }
      username = text;

      clients.set(text, socket);

      socket.write(
        `Welcome ${username}! Commands: /dm <user> <msg>, /list, /quit \n`,
      );

      broadcast(`*** ${username} joined chat`, socket);

      console.log(`Username ${username} joined. Total: ${clients.size}`);
      return;
    }

    const command = parseCommand(text);

    if (command.type === 'broadcast') {
      broadcast(`${username}: ${command.message}`, socket);
    } else if (command.type === 'dm') {
      const target = clients.get(command.target);

      if (!target) {
        socket.write(`User ${command.target} not found`);
      } else if (target === socket) {
        socket.write('You cannot write yourself');
      } else {
        target.write(`DM from ${username}: ${command.message}`);
        socket.write(`DM to ${command.target}: ${command.message}`);
      }
    } else if (command.type === 'list') {
      const names = Array.from(clients.keys()).join(', ');

      socket.write(`Online (${clients.size}): ${names}`);
    } else if (command.type === 'quit') {
      socket.write('Bye! \n');
      socket.end();
    } else if (command.type === 'error') {
      socket.write(command.error + '\n');
    }
  });

  socket.on('close', () => {
    if (username !== null) {
      clients.delete(username);

      broadcast(`*** ${username} left chat`, socket);
      console.log(`${username} disconnected. Total ${clients.size}`);
    }
  });

  socket.on('error', (err) => {
    console.log(`Socket error (${username || 'unknown'}): ${err.message}`);
  });
});

server.listen(PORT, HOST, () => {
  console.log(
    `Chat server listnening on ${HOST}: ${PORT} (max ${MAX_CLIENTS} clients)`,
  );
});
