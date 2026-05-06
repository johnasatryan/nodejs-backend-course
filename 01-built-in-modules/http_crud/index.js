const http = require('node:http');

const users = [];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET' && req.url === '/users') {
    res.writeHead(200);
    return res.end(JSON.stringify(users));
  }

  if (req.method === 'GET' && req.url.startsWith('/users/')) {
    const id = req.url.split('/')[2];

    const user = users.find((u) => u.id === id);

    if (!user) {
    }

    res.writeHead(200);
    return res.end(JSON.stringify(user));
  }
  if (req.method === 'POST' && req.url === '/users') {
    let body = '';

    req.on('data', (chunk) => (body += chunk));

    req.on('end', () => {
      try {
        const data = JSON.parse(body);

        if (!data.name) {
          res.writeHead(400);
          return res.end(JSON.stringify({ error: 'Name field is required' }));
        }

        const user = { id: users.length + 1, name: data.name };

        users.push(user);
        res.writeHead(201);
        return res.end(JSON.stringify(user));
      } catch (err) {
        res.writeHead(400);
        return res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  res.writeHead(404, JSON.stringify({ error: 'Route not found' }));
  res.end();
});

server.listen(3001, () => {
  console.log('Server runing on port: 3001');
});
