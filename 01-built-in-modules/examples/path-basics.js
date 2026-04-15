const path = require('node:path');

console.log(__dirname);
console.log(__filename);

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.isAbsolute(__dirname));
// console.log(path.isAbsolute('../folder'));

// console.log(Object.getOwnPropertyNames(path));

// console.log(path.join('folder1', './folder2', 'index.html'));

console.log(Object.getOwnPropertyNames(path));

console.log(path.parse(__filename));
