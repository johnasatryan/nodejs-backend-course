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

