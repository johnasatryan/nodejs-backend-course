// // // async function foo() {
// // //   console.log('anything');
// // //   return 12;
// // // }

// // // // Promise case

// // // const p = new Promise((resolve) => {
// // //   resolve(12);
// // // });

// // // function moo() {
// // //   return p;
// // // }

// // // console.log('start synchronous...');
// // // const res = foo();
// // // console.log(res);

// // // console.log('end synchronous...');

// // // foo().then((value) => {
// // //   console.log(value);
// // // });

// // // function foo() {
// // //   return Promise.resolve(12);
// // // }

// // function foo() {
// //   return Promise.resolve(12);
// // }

// // // async function async_foo() {
// // //   foo().then((value) => console.log(value));
// // // }

// // async function async_foo() {
// //   const res = await foo();

// //   return res;
// // }

// // console.log(async_foo());

// // // async function startServer() {
// // //   const res = await async_foo();

// // //   console.log(res);
// // // }

// // // startServer();

// // (async function () {
// //   const res = await async_foo();
// //   console.log(res);
// // })();

// // async function foo() {
// //   await console.log('hello await');
// //   console.log('line 61');
// // }

// // foo();
// // console.log('Start');

// // fetch('https://')
// //   .then((value) => {
// //     console.log(value);
// //   })
// //   .catch((err) => {
// //     console.log(err.message);
// //   });

// async function f() {
//   try {
//     const res = await fetch('https://');
//   } catch (err) {
//     console.log(err.message);

//     try {
//       throw new Error();
//     } catch (err) {}
//   } finally {
//     console.log('finally');
//   }
// }

// f();

// import person from './events-basics.js';
const person = require('./events-basics');

console.log(person);
