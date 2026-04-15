# Lesson 01 — Built-in Modules

Node.js comes with a set of built-in (core) modules that you can use without installing anything. These modules provide essential functionality for file system operations, networking, working with paths, and more.

## Modules Covered

### `path`
Utilities for working with file and directory paths.

```js
const path = require('path');

path.join('/users', 'jon', 'documents');    // '/users/jon/documents'
path.resolve('src', 'index.js');            // absolute path
path.extname('app.js');                     // '.js'
path.basename('/home/jon/file.txt');        // 'file.txt'
path.dirname('/home/jon/file.txt');         // '/home/jon'
```

### `fs` (File System)
Read, write, and manipulate files and directories.

```js
const fs = require('fs');

// Synchronous
const data = fs.readFileSync('file.txt', 'utf-8');

// Asynchronous (callback)
fs.readFile('file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Promises API
const fsPromises = require('fs/promises');
const content = await fsPromises.readFile('file.txt', 'utf-8');
```

### `os`
Operating system related utilities.

```js
const os = require('os');

os.platform();    // 'darwin', 'win32', 'linux'
os.homedir();     // home directory path
os.cpus();        // CPU info
os.totalmem();    // total memory in bytes
os.freemem();     // free memory in bytes
```

### `events`
Event-driven architecture using the `EventEmitter` class.

```js
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.emit('greet', 'Jon');
```

### `http`
Create HTTP servers and make HTTP requests.

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

## References

- [Node.js Documentation — Built-in Modules](https://nodejs.org/docs/latest/api/)
- [path](https://nodejs.org/docs/latest/api/path.html)
- [fs](https://nodejs.org/docs/latest/api/fs.html)
- [os](https://nodejs.org/docs/latest/api/os.html)
- [events](https://nodejs.org/docs/latest/api/events.html)
- [http](https://nodejs.org/docs/latest/api/http.html)
