const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } else if (req.url === '/json') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello from JSON', status: 'ok' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Try visiting:');
  console.log(`  http://localhost:${PORT}/`);
  console.log(`  http://localhost:${PORT}/json`);
  console.log(`  http://localhost:${PORT}/unknown`);
  console.log('Press Ctrl+C to stop');
});
