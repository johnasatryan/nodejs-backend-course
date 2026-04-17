const fs = require('node:fs');
const crypto = require('node:crypto');
const os = require('node:os');

// process.env.UV_THREADPOOL_SIZE = 10;
// const start = Date.now();
// for (let i = 0; i < 10; ++i) {
//   crypto.pbkdf2('bananana', 'salt', 1000000, 128, 'sha512', () => {
//     console.log(Date.now() - start, 'ms');
//   });
// }

// const file = fs.openSync('file.txt', 'w');

// fs.writeFileSync(file, 'Hello world');

// fs.closeSync(file);

// fs.writeFileSync('file.txt', 'another file data');

// const fd = fs.openSync('file.txt', 'r+');

// const d = fs.writeFileSync(fd, 'data');

// const data = JSON.parse(fs.readFileSync('./users.json'));

// console.log(data);

const user = {
  id: 1,
  fullname: 'Bob Smith',
  email: 'bob@example.com',
};

fs.writeFileSync(
  'users.json',
  JSON.stringify(
    user,
    (key, value) => {
      value['id'] = 23;
      return value;
    },
    2,
  ),
);
