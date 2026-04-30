// const EventEmitter = require('node:events');

const { EventEmitter } = require('node:stream');

// const event = new EventEmitter();

// // // console.log('start');
// // // event.on('click', (value1, value2) => {
// // //   console.log('clicked...');
// // //   console.log(value1, value2);
// // // });

// // // event.emit('click', 23, 55);

// // // console.log('end');

// // // event.on('click', async (url) => {
// // //   const res = await fetch(url);
// // //   console.log(res.status);
// // // });

// // // event.emit('click', 'https://picsartacademy.am');
// // // event.emit('click', 'https://google.com');

// // async function moo(url) {
// //   const res = await fetch(url);
// //   console.log(res.status);
// // }

// // event.on('click', moo);
// // event.on('click', () => {
// //   console.log('hello');
// // });

// // event.emit('click', 'https://picsartacademy.am');
// // event.emit('click', 'https://google.com');

// // event.addListener('close', () => {
// //   console.log('event closed');
// // });

// // console.log(event.eventNames());

// class CustomEmitter {
//   constructor() {
//     this.listeners = [];
//   }

//   on(eventName, listener) {
//     this.listeners.push({ eventName, listener });
//   }

//   emit(eventName, ...args) {
//     const listeners = this.listeners.filter((v) => v.eventName === eventName);
//     for (const { listener } of listeners) {
//       listener(...args);
//     }
//   }
// }

// const Event = new CustomEmitter();

// Event.on('click', () => {
//   console.log('bye');
// });
// Event.on('click', () => {
//   console.log('hello');
// });

// Event.emit('click', 'https://picsartacademy.am');
// Event.emit('click', 'https://google.com');

const http = require('node:http');

const server = http.createServer((req, res) => {
  req.on('data', (chunk) => {
    console.log(chunk);
  });

  req.on('close', () => {
    console.log('connection closed');
  });

  res.write('inch es uzum?');
  console.log(req.eventNames());

  res.end(() => {});
});

server.listen(3000, () => {
  console.log('Server is runing...');
});

// class Mlass extends EventEmitter {
//   constructor() {
//     super();
//   }

//   handsOn(listener) {
//     this.addListener(listener);
//   }
// }

// const event = new Mlass();
