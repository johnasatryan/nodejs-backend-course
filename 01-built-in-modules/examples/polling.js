const fs = require('node:fs');

// process.nextTick(() => {
//   console.log('Process Next Tick');
// });

// queueMicrotask(() => {
//   console.log('Microtask...');
// });

setTimeout(() => {
  console.log('setTimeout 1');
}, 14);



setImmediate(() => {
  console.log('Immediate...');
});

fs.readFile(__filename, { encoding: 'utf-8' }, () => {
  console.log('File reading...');
});

for (let i = 0; i < 1_000_000_000; ++i) {}
